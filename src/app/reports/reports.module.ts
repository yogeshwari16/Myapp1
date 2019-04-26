import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { RouterModule, Routes } from '@angular/router';

export const approute:Routes = [
   { path:'', component:ReportsComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ReportsComponent]
})
export class ReportsModule { }
