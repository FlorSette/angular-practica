import { Component, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-practica';

  nombreUsuarioApp: string;
  apellidoUsuarioApp: string;
  dniUsuarioApp: number;
  edadUsuarioApp: number;
  genderUsuarioApp: string;

  num1: number;
  num2: number;
  operacion: string;
  resultado: number;

  calcular() {
    if (this.operacion === "+") {
      this.resultado = this.num1 + this.num2
    } else {
      if (this.operacion === "-") {
        this.resultado = this.num1 - this.num2
      } else {
        if (this.operacion === "*" || this.operacion === "x" || this.operacion === "X") {
          this.resultado = this.num1 * this.num2
        } else {
          if (this.operacion === "/") {
            this.resultado = this.num1 / this.num2
          }
        }
      }
    }
  }

  sum(){
    this.resultado = this.num1 + this.num2;
  }

  rest(){
    this.resultado = this.num1 - this.num2;
  }

  divi(){
    this.resultado = this.num1 / this.num2;
  }

  multi(){
    this.resultado = this.num1 * this.num2;
  }

  capturarInfo(event) {
    this.nombreUsuarioApp = event.nombre;
    this.apellidoUsuarioApp = event.apellido;
    this.dniUsuarioApp = event.dni;
    this.edadUsuarioApp = event.edad;
    this.genderUsuarioApp = event.gender;

    console.log(event);

  }

}


