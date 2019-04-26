import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder, Validator, Validators, MaxLengthValidator} from '@angular/forms'
import { Router } from '@angular/router';
import { ApiCallsService } from '../services/httpcalls/api-calls.service';
import { ToasterService } from 'angular2-toaster';
import { UserServiceService } from '../services/users/user-service.service';
import { Message } from '../constants/messages';

@Component({
  selector: 'cdk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {
   public loading = false;
  userForm: FormGroup;
  formErrors = {
   'empId':'',
   'password':'',
  };
  validationMessages = {
    'empId':{'required':'please enter your employee Id'},
    'password': {
      'required': 'please enter your password',
      'pattern': 'The password must contain numbers and letters',
      'minlength': 'Please enter more than 4 characters',
      'maxlength': 'Please enter less than 25 characters',
    }
  };
  constructor(private router: Router,
    private fb: FormBuilder,
    private serviceCall: ApiCallsService,
    private toasterService: ToasterService,
    private userService:UserServiceService) { }

  ngOnInit() {
    this.buildform();
  }
  buildform(){
    this.userForm = this.fb.group({
      'empId' :['',[
        Validators.required
      ]
    ],
    'password' : ['',[
     Validators.minLength(5),
      Validators.maxLength(25)
    ]
  ],
    });
    this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }
  onValueChanged(data?: any){
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
  login(){
    this.loading = true;
    let empId = this.userForm.get('empId').value;
    let password = this.userForm.get('password').value;
    this.serviceCall.signIn({userId: empId, password: password }).subscribe(
      data =>{
        this.loading = false;
           if (data.success) {
             this.userService.saveUserId(data.result.user.userId);
             this.userService.saveUserEmail(data.result.user.emailId);
             this.userService.saveJWTToken(data.result.token);
             this.router.navigate(['/auth/location']);
           } else {
            this.toasterService.pop('error',Message.error_title, data.msg);
           }
      },
      error =>{
        this.loading = false;
       this.toasterService.pop('error',Message.error_title, error.error.msg );
      }
    );

  }


}
