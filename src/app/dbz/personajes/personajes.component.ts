import { Component, Input } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
//Para traer data del componete padre al hijo 
//@Input() personajes:Personaje [] =[]//l inicializamos primero en vaci hasa que traiga los datos del padre

get personajes(){
  return this.dbzService.personajes;
}
//TRAEMOS LA DATA DEL SERVICIO INYCTANDOLO EN EL CONSTRUCTOR
constructor(private dbzService: DbzService){}
}
