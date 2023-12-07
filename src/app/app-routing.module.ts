import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//imports de egresos
import{EgresoComponent } from './egreso/egreso.component'
import{CrearEgresoComponent} from'./egreso/crear-egreso/crear-egreso.component'
import{ObtenerEgresoComponent} from'./egreso/obtener-egreso/obtener-egreso.component'



//imports de usuario
import {CrearUsuarioComponent} from './usuarios/crear-usuario/crear-usuario.component'
import {UsuariosComponent} from './usuarios/usuarios.component'; 
import { ObtenerUsuarioComponent } from './usuarios/obtener-usuario/obtener-usuario.component';

const routes: Routes = [
  {
    path: 'usuarios', 
    component: UsuariosComponent
  },
  {
  path: 'usuarios/crear',
  component: CrearUsuarioComponent
  },
  {
    path:'usuarios/obtener',
    component: ObtenerUsuarioComponent

  },
  //fin herencias de usuario


  //inicio herencias de egresos
  {
    path: 'egreso',
    component: EgresoComponent
  },
  {
    path:'egreso/crear',
    component: CrearEgresoComponent
  },
  {
    path:'egreso/obtener',

    component: ObtenerEgresoComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
