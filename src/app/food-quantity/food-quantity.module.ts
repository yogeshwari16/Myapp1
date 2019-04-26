import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodQuantityComponent } from './food-quantity.component';
import { RouterModule, Routes } from '@angular/router';

export const appRoute:Routes = [
  { path: '' , component:FoodQuantityComponent},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule

  ],
  declarations: [FoodQuantityComponent]
})
export class FoodQuantityModule { }
