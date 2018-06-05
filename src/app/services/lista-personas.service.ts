import { Injectable } from '@angular/core';
import { Persona } from '../persona';

@Injectable({
  providedIn: 'root'
})
export class ListaPersonasService {
  _listadopersona: Persona[] = [];
  constructor() { }

  guardarService(datos) {
   this._listadopersona.push(datos.value);
  }
   getPersona() {
       return this._listadopersona;
   }
   borrarPersona(index: number) {
    this._listadopersona.splice(index, 1);
   }
}
