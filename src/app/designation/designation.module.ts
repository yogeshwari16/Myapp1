import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignationComponent } from './designation.component';
import { RouterModule, Routes } from '@angular/router';
import { DndModule } from 'ng2-dnd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { 
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatPaginatorModule,
  MatButtonModule,
  MatIconModule,
  MatSortModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatChipsModule,
  MatButtonToggleModule,
  MatTabsModule,
  MatStepperModule,
  MatInputModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule
} from '@angular/material';

import * as hljs from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';

export function highlightJsFactory(): any {
hljs.registerLanguage('typescript', hljsTypescript);
return hljs;
}    
export const AppRoutes:Routes = [
  {path: '',  component: DesignationComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AppRoutes),
    DndModule.forRoot(),
    FormsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatChipsModule,
    MatButtonToggleModule,
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory
    }),
  ],
  declarations: [DesignationComponent]
})
export class DesignationModule { }
