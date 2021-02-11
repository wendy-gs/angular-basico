import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroComponent {

    nombre: string = 'Iroman';
    edad: number = 45;
    ObtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`
    }

    //creamos un get
    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    cambiarNombre():void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void {
        this.edad= 35
    }
}