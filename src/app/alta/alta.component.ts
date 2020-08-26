import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  @Output() outputInfo: EventEmitter<any> = new EventEmitter<any>();

  nombre: string;
  apellido: string;
  dni: number;
  edad: number;

  constructor() { }

  ngOnInit() {
  }
  
  ingresar() {
    this.outputInfo.emit(
      {
        nombre: this.nombre,
        apellido: this.apellido,
        dni: this.dni,
        edad: this.edad

      }
    );
  }

}




