import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPrevilagesComponent } from './add-previlages.component';
import { RouterModule, Routes } from '@angular/router';

export const appRoute:Routes = [
  {path:'', component:AddPrevilagesComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AddPrevilagesComponent]
})
export class AddPrevilagesModule { }
