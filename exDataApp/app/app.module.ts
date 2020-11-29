import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'; 
import {MaterialModule} from './modules/material-ui/material-ui.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HeadfootModule} from './modules/headfoot/headfoot.module'
import { from } from 'rxjs';
import { CsvComponent } from './csv/csv.component';
import { JsonFirstComponent } from './json-first/json-first.component';
import { JsonButtonsComponent } from './json-buttons/json-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    CsvComponent,
    JsonFirstComponent,
    JsonButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, 
    MaterialModule,
    HeadfootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
