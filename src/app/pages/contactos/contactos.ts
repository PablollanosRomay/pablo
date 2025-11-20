import { Component } from '@angular/core';
import { Forms } from '../../componentes/forms/forms';
import { Header } from '../../componentes/header/header';
@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [Forms,Header],
  templateUrl: './contactos.html',
  styleUrl: './contactos.css',
})
export class Contactos {

}
