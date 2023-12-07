import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

import { EgresoComponent } from './egreso/egreso.component';

import { ObtenerUsuarioComponent } from './usuarios/obtener-usuario/obtener-usuario.component';
import { ObtenerEgresoComponent } from './egreso/obtener-egreso/obtener-egreso.component';
import { CrearEgresoComponent } from './egreso/crear-egreso/crear-egreso.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
   
    ObtenerUsuarioComponent,
    ObtenerEgresoComponent,
    CrearEgresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
