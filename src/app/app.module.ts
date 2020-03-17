import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyInfoComponent } from './body-info/body-info.component';
import { InfoComponent } from './body-info/info/info.component';
import { FooterComponent } from './footer/footer.component';
import { ModalListWaitComponent } from './modal-list-wait/modal-list-wait.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyInfoComponent,
    InfoComponent,
    FooterComponent,
    ModalListWaitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
