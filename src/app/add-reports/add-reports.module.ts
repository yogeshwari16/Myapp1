import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddReportsComponent } from './add-reports.component';
import { RouterModule, Routes } from '@angular/router';

export const appRoute:Routes = [
{ path:'' , component:AddReportsComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AddReportsComponent]
})
export class AddReportsModule { }
