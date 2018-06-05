import { Component, OnInit } from '@angular/core';
import { NgForm, Form } from '@angular/forms';
import { ListaPersonasService } from '../services/lista-personas.service';
import { Persona } from '../persona';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
public personas: Array<any>;
usuario: Object =
{
  cedula: 80093134,
  nombre: 'Fernando Rodriguez',
  pais: 'Colombia',
  genero: 'Masculino',
  acepta: false
};

paises = [
{
  codigo : 1,
  nombre : 'Colombia'
},
{
  codigo : 2,
  nombre : 'Brasil'
},
{
  codigo : 3,
  nombre : 'Argentina'
}
];
genero: string[] = ['Masculino', 'Femenino'];

constructor(public _listadopersona: ListaPersonasService
 ) { }

  ngOnInit() {
   // this.personas = this._listadopersona.getPersona();
   // console.log(this.personas);
  this.personas = this._listadopersona.getPersona();
  console.log(this._listadopersona);
  }
  
postPersona(datos: Form) {
  this._listadopersona.guardarService(datos);
  
 }
 deletePersona(index: number) {
  this._listadopersona.borrarPersona(index);
}
}
