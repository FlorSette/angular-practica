import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() nombreUsuario:string;
  @Input() apellidoUsuario:string;
  @Input() dniUsuario:number;
  @Input() edadUsuario:number;
  @Input() genderUsuario:string;

  constructor() { }

  ngOnInit(): void {
  }

}
