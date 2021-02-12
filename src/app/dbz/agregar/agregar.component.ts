import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Personaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{
  @Input() nuevo :Personaje = {
    nombre: '',
    poder: 0
  }
  constructor(private dbzService: DbzService){}
  //Pasaremos datos del hijo al padre
 // @Output() onNuevoPersonaje : EventEmitter<Personaje>= new EventEmitter();
  agregar (){
    if(this.nuevo.nombre.trim().length === 0 ){return;}//salga del metodo
    //this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
