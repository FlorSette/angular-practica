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

  capturarInfo(event) {
    this.nombreUsuarioApp = event.nombre;
    this.apellidoUsuarioApp = event.apellido;
    this.dniUsuarioApp = event.dni;
    this.edadUsuarioApp = event.edad;
    this.genderUsuarioApp = event.gender;

    console.log(event);

  }

}


