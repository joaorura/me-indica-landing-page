import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthenticatorService } from './authenticator.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyInfoComponent } from './body-info/body-info.component';
import { InfoComponent } from './body-info/info/info.component';
import { FooterComponent } from './footer/footer.component';
import { ModalListWaitComponent } from './modal-list-wait/modal-list-wait.component';
import { RegisterComponent } from './modal-list-wait/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyInfoComponent,
    InfoComponent,
    FooterComponent,
    ModalListWaitComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
