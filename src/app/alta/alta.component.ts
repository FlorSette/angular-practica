import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  nombre: string;
  apellido: string;
  dni: number;
  edad: number;

  constructor() { }
  

  

  ngOnInit(): void  {
    
  }
  ingresar(): void{
    console.log(this.nombre + this.apellido + this.dni + this.edad)
  }
  
}




