import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validator, Validators, MaxLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallsService } from '../../../services/httpcalls/api-calls.service';
@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.scss']
})
export class AddSectionComponent implements OnInit {
   form:FormGroup;
   formErrors ={
     'title':'',
     'parentId':'',
   };
   validationMessages = {
     'title':{
             'required':'please enter section',
              'minlength':'please enter more than 3 character',
              'maxlength':'please enter less than 25 character'
            },
      'parentId':{
                    'required':'please select department',
      }     
   };
   title:string = "Add";
   section;
   departments;
   deptitle;
  constructor(private serviceCall:ApiCallsService,
              private fb:FormBuilder,
              private dialogref:MatDialogRef<AddSectionComponent>,
              @Inject(MAT_DIALOG_DATA) data) { 
                this.title = data.dialogData.title ? data.dialogData.title : this.title ,
                this.section = data.sectionData;
              }

  ngOnInit() {
      this.loadDepartment();
    if (this.section == 'null') {
       this.buildAddForm();
    } else {
      this.buildEditForm(this.section);
    }
  }
  loadDepartment(){
    this.serviceCall.getDepartment().subscribe(
       data =>{
        if (data.success) {
          this.departments = data.data;
          this.deptitle = data.data.id;
        } else {
          
        }
       },error =>{
      
       });
  }
  buildAddForm(){
     this.form = this.fb.group({
        title:['',[Validators.required,
                   Validators.minLength(3),
                   Validators.maxLength(25)
                  ]],
        parentId:['', Validators.required],   
        status:[true, ],       
     });
     this.form.valueChanges.subscribe(data =>this.onValueChanged(data));
     this.onValueChanged();
  }
  buildEditForm(section){
    this.form = this.fb.group({
      title:[section.title,[Validators.required,
                         Validators.minLength(3),
                         Validators.maxLength(25)
                         ]],
      parentId:[section.parentId,[Validators.required]], 
      status:[section.status, ],                  
    });
    this.form.valueChanges.subscribe(data =>this.onValueChanged(data));
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
      let data = {section:this.form.value, action:"Add"}
      this.dialogref.close(data);
    }
  
    close() {
      this.dialogref.close();
    }
    update() {
      let data = {section:this.form.value, action:"Edit", id:this.section.id}
      this.dialogref.close(data);
    }
  

}
