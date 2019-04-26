import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetMenuComponent } from './set-menu.component';
import { RouterModule, Routes } from '@angular/router';

export const appRoute:Routes = [
  { path:'', component: SetMenuComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [SetMenuComponent]
})
export class SetMenuModule { }
