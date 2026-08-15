import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './features/auth/login/login.component';
// Material Module

import { MaterialModule } from './shared/material/material.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
// JWT Interceptor

import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { LoaderInterceptor } from './core/interceptors/loader.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommissionManagementComponent } from './commission-management/commission-management.component';
import { EmployeesComponent } from './employees/employees.component';
import { SalesComponent } from './sales/sales.component';
import { CorrelationIdInterceptor } from './core/interceptors/corelationId.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CommissionManagementComponent,
    EmployeesComponent,
    SalesComponent
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,

    ToastrModule.forRoot({

      timeOut: 4000,
      progressBar: true,
      closeButton: true,
      newestOnTop: true,
      preventDuplicates: true,
      easeTime: 300,
      positionClass: 'toast-top-right'

    }),


    AppRoutingModule,

    ReactiveFormsModule,

    HttpClientModule,

    MaterialModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatTableModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },

    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },

    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CorrelationIdInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
