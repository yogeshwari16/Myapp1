import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillCancelComponent } from './bill-cancel.component';
import { RouterModule, Routes } from '@angular/router';

export const appRoute:Routes = [
  { path:'' , component:BillCancelComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [BillCancelComponent]
})
export class BillCancelModule { }
