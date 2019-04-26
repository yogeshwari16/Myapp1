import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovalComponent } from './approval.component';
import { RouterModule, Routes } from '@angular/router';

export const appRoute:Routes = [
  { path: '', component:ApprovalComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ApprovalComponent]
})
export class ApprovalModule { }
