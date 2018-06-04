import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormulaComponent } from './formula/formula.component';


import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ListaPersonasService } from './services/lista-personas.service';


@NgModule({
  declarations: [
    AppComponent,
    FormulaComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ListaPersonasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
