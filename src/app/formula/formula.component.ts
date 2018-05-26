import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent implements OnInit {
usuario: Object = {
  Cedula: 1122,
  Nombre: 'Fernando'

};
  constructor() { }

  ngOnInit() {
  }
  guardar(f: NgForm) {
    console.log(this.usuario);
    console.log(f);
    
   }
}
