import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LazyLoadModule } from './lazy-load/lazy-load.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ToasterModule, ToasterService} from 'angular2-toaster';
import { NgxLoadingModule, ngxLoadingAnimationTypes} from 'ngx-loading';
import { ApiCallsService } from './services/httpcalls/api-calls.service';
import { UserServiceService } from './services/users/user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertDialogComponent } from './dialogs/alert-dialog/alert-dialog.component';
import { MatDialogModule,MatButtonModule,MatToolbarModule,MatInputModule, MatSlideToggleModule, MatFormFieldModule, MatSelectModule} from '@angular/material';
import { JwtModule} from '@auth0/angular-jwt'
import { Api } from './constants/api';
import { SuccessDialogComponent } from './dialogs/success-dialog/success-dialog.component';
import { AddLocationComponent } from './location/dialog/add-location/add-location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddDepartmentComponent } from './department/dialog/add-department/add-department.component';
import { AddSectionComponent } from './department/dialog/add-section/add-section.component';

export function tokenGetter(){
  return localStorage.getItem("jwtToken");
}
@NgModule({
  declarations: [
    AppComponent,
    AlertDialogComponent,
    SuccessDialogComponent,
    AddLocationComponent,
    AddDepartmentComponent,
    AddSectionComponent
  ],
  imports: [
    BrowserModule,
    LazyLoadModule,
    CoreModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule,
    JwtModule.forRoot({
       config:{
         tokenGetter:tokenGetter,
         whitelistedDomains:[Api.HOSTNAME+":"+Api.PORT],
         blacklistedRoutes:[],
         authScheme: 'JWT '

       }
    }),
    ToasterModule.forRoot(),
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.threeBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '3px',
      primaryColour: '#000000', 
      secondaryColour: '#000000', 
      tertiaryColour: '#000000'
  })
  ],
  providers: [ApiCallsService, UserServiceService],
  bootstrap: [AppComponent],
  entryComponents: [AlertDialogComponent,SuccessDialogComponent,AddLocationComponent,AddDepartmentComponent,AddSectionComponent]
})
export class AppModule { }
