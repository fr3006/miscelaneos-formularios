import { Component, OnInit } from '@angular/core';
import { NgForm, Form } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
usuario: Object =
{
  cedula: 8009999,
  nombre: 'Yo yo yo',
  pais: '1',
  sexo: 'Masculino',
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
  constructor() { }

  ngOnInit() {
  }
guardar(f: Form) {
 console.log(f);
 }
}
