import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers/servers.component';
import { WarningAlertComponent } from './alerts/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './alerts/success-alert/success-alert.component'
import { ErrorAlertComponent } from './alerts/error-alert/error-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ErrorAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
