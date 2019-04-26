import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { RouterModule, Routes } from '@angular/router';

export const Approute:Routes = [
  { path: '', component:EmployeeComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [EmployeeComponent]
})
export class EmployeeModule { }
