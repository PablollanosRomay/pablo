import { Routes } from '@angular/router';
import { GALERIA } from './pages/galeria/galeria';
import { Contactos } from './pages/contactos/contactos';
import { Home } from './pages/home/home';
import { Resumen } from './pages/resumen/resumen';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'galeria',component: GALERIA},
    {path: 'contactos',component: Contactos},
    {path: 'resumen', component: Resumen}
];
