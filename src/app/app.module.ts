import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SessionService } from './session.service';

// ROUTING
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ConnectionErrorComponent } from './pages/connection-error/connection-error.component';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ConnectionErrorComponent,
    AccessDeniedComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
