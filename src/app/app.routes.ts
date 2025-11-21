
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { GALERIA } from './pages/galeria/galeria';
import { Contactos } from './pages/contactos/contactos';
import { Home } from './pages/home/home';
import { Resumen } from './pages/resumen/resumen';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'galeria', component: GALERIA },
  { path: 'contactos', component: Contactos },
  { path: 'resumen', component: Resumen }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule {}
