import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder,Validator, Validators, MaxLengthValidator} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {
   form: FormGroup;
   formErrors = {
     'title':'',
   };
   validationMessages = {
     'title':{
              'required':'please enter Department',
              'minlength':'please enter more than 2 characters',
              'maxlength':'please enter less than 25 character',
     }
   };
   title:string = "Add";
   department;
  constructor( private fb:FormBuilder,
               private dialogref:MatDialogRef<AddDepartmentComponent>,
               @Inject(MAT_DIALOG_DATA) data) { 
                 this.title = data.dialogData.title ?data.dialogData.title : this.title,
                 this.department = data.departmentData;
               }

  ngOnInit() {
    if ( this.department == 'null') {
      this.buildAddForm();
    } else {
      this.buildEditForm(this.department);
    }
  }
  buildAddForm(){
    this.form = this.fb.group({
      title:['',[ Validators.required,
                  Validators.minLength(2),
                  Validators.maxLength(25)
        
                   ] ],
      status:[true, ],
  });
  this.form.valueChanges.subscribe(data => this.onValueChanged(data));
  this.onValueChanged();
  }
  buildEditForm(department){
    this.form = this.fb.group({
      title:[department.title, [ Validators.required,
                               Validators.minLength(2),
                               Validators.maxLength(25)
                             ] ],
      status:[department.status, ],
  });
  this.form.valueChanges.subscribe(data => this.onValueChanged(data));
  this.onValueChanged();
  }

  onValueChanged(data?: any){
     if(!this.form){
       return;
     }
     const form1 = this.form;
     for(const field in this.formErrors){
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
        this.formErrors[field] = '';
        const control = form1.get(field);
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

  save() {
    let data = {department:this.form.value, action:"Add"}
    this.dialogref.close(data);
  }

  close() {
    this.dialogref.close();
  }
  update() {
    let data = {department:this.form.value, action:"Edit", id:this.department.id}
    this.dialogref.close(data);
  }

}
