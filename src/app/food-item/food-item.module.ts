import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodItemComponent } from './food-item.component';
import { RouterModule, Routes } from '@angular/router';

export const appRoute:Routes = [
  { path:'', component:FoodItemComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [FoodItemComponent]
})
export class FoodItemModule { }
