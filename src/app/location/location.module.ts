import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DndModule } from 'ng2-dnd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { LocationComponent } from './location.component';
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
        MatTableModule,
        MatDialogModule
    } from '@angular/material';
    import {NgxLoadingModule ,ngxLoadingAnimationTypes,NgxLoadingService} from 'ngx-loading';
    import * as hljs from 'highlight.js';
    import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';
    import * as hljsTypescript from 'highlight.js/lib/languages/typescript';


    export const appRoutes: Routes = [
      { path: '', component: LocationComponent },
    ];
    
    export function highlightJsFactory(): any {
      hljs.registerLanguage('typescript', hljsTypescript);
      return hljs;
    }    
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
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
    MatDialogModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.threeBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '3px',
      primaryColour: '#ffffff', 
      secondaryColour: '#ffffff', 
      tertiaryColour: '#ffffff'
               }),
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory
    }),
  ],
  declarations: [LocationComponent],
})

export class LocationModule { }
