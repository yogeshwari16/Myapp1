import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayMenuComponent } from './display-menu.component';
import { RouterModule, Routes } from '@angular/router';

export const appRoute:Routes = [
  { path:'' , component: DisplayMenuComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [DisplayMenuComponent]
})
export class DisplayMenuModule { }
