import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CommitsFrontendComponent } from './commits-frontend/commits-frontend.component';
import { CommitsBackendComponent } from './commits-backend/commits-backend.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CommitsBackendComponent,
    CommitsFrontendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
