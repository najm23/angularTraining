import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { HeaderComponent } from './components/layout/header.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { HommeComponent } from './components/homme/homme.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';




@NgModule({
  declarations: [
    AppComponent,
    GetStartedComponent,
    HeaderComponent,
    ExponentialStrengthPipe,
    HommeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
