import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ToasterService} from 'angular2-toaster';
import { ApiCallsService } from '../services/httpcalls/api-calls.service';
import { UserServiceService } from '../services/users/user-service.service';
import { Message } from '../constants/messages';
import { AlertDialogComponent } from '../dialogs/alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material';
import { SuccessDialogComponent } from '../dialogs/success-dialog/success-dialog.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public loading = false;
  userForm: FormGroup;
  formErrors = {
     'email': '',
  };
  validationMessages = {
    'email': {
      'required': 'Please enter your email',
      'email': 'please enter your vaild email'
    }
  };

  constructor(private router: Router,
    private fb: FormBuilder,
    private toasterService: ToasterService,
    private serviceCall: ApiCallsService,
    private userService:UserServiceService,
    private dialog:MatDialog,
  ) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]
      ],
    });

    this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.userForm) {
      return;
    }
    const form = this.userForm;
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  ConfirmResetDialog() {
		let dialogRef = this.dialog.open(AlertDialogComponent,{
		  data: {
			  title:"Confirmation",
			  subTitle:"Are you sure you want reset password?",
			  buttonCancelName:"Cancel",
			  buttonConfirmName:"Ok",
		  }
		});
		dialogRef.afterClosed().subscribe(result => {
		  if (result == 'confirm') {
			this.resetPassword();
		  }
		})
    }
    confirmSuccessDialog(msg){
      let dialogSucess = this.dialog.open(SuccessDialogComponent,{
        data: {
          title:"Success",
          subTitle: msg,
          buttonConfirmName:"Ok",
        }
      });
      dialogSucess.afterClosed().subscribe(result => {
        if (result == 'confirm') {
          this.router.navigate(['/login']);
        }
      })
    }

  resetPassword() {
     this.loading = true;
    let email = this.userForm.get('email').value;
    this.serviceCall.resetPassword({ emailId: email }).subscribe(
      data => { 
        if (data.success) {
          this.loading = false;
           this.confirmSuccessDialog(data.msg);
        } else {
          this.loading = false;
          this.toasterService.pop('error',Message.error_title, data.msg);
        }
      
      },
      error => {
        this.loading = false;
        this.toasterService.pop('error', Message.error_title, error.error.msg);
      });

  }
}

