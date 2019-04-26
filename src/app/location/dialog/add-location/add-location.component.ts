import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder,Validator, Validators, MaxLengthValidator} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {
   form: FormGroup;
   formErrors = {
     'title':'',
   };
   validationMessages = {
    'title':{    'required':'please enter location',
                 'minlength':"please enter more than 2 character",
                 'maxlength':'please enter less than 25 character',
  }
   };
   description:string;
    title:string = "Add";
    location;
  constructor(private fb:FormBuilder,
              private dialogref:MatDialogRef<AddLocationComponent>,
               @Inject(MAT_DIALOG_DATA) data) { 
                this.title = data.dialogData.title ? data.dialogData.title : this.title;
                 this.location = data.locationData;
               }

  ngOnInit() {
   if ( this.location == 'null') {
     this.buildAddForm();
   } else {
     this.buildEditForm(this.location);
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
  buildEditForm(location){
    this.form = this.fb.group({
      title:[location.title, [ Validators.required,
                               Validators.minLength(2),
                               Validators.maxLength(25)
                             ] ],
      status:[location.status, ],
  });
  this.form.valueChanges.subscribe(data => this.onValueChanged(data));
  this.onValueChanged();
  }
  onValueChanged(data?: any){
   // alert("hii");
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
    let data = {location:this.form.value, action:"Add"}
    this.dialogref.close(data);
  }

  close() {
    this.dialogref.close();
  }
  update() {
    let data = {location:this.form.value, action:"Edit", id:this.location.id}
    this.dialogref.close(data);
  }
}
