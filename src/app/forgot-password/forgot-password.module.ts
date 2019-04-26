import { NgModule } from '@angular/core';
import { ForgotPasswordComponent } from './forgot-password.component';
import { 
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule
       } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {NgxLoadingModule ,ngxLoadingAnimationTypes,NgxLoadingService} from 'ngx-loading';

const routes: Routes = [
    {path: '', component: ForgotPasswordComponent},
  ];
@NgModule({
    imports: [
        MatCardModule,
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,
        FormsModule,
        ReactiveFormsModule,
        NgxLoadingModule.forRoot({
            animationType: ngxLoadingAnimationTypes.threeBounce,
            backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
            backdropBorderRadius: '3px',
            primaryColour: '#ffffff', 
            secondaryColour: '#ffffff', 
            tertiaryColour: '#ffffff'
                     }),
        RouterModule.forChild(routes)
    ],
    declarations: [   
        ForgotPasswordComponent,
    ],
    exports: [
        RouterModule
    ],
    providers: [
       
    ]
})
export class ForgotPasswordModule {
    
}
