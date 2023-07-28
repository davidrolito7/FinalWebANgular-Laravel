import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearUsarioComponent } from './usuarios/crear-usario/crear-usario.component';
import { CrearRopaComponent } from './reportes/crear-ropa/crear-ropa.component';
const routes: Routes = [
  //aca digo que cuando no haya una ruta especifica se manda al dashboard poara defecto
  {path:'',component:DashboardComponent,children:[
    {path:'',component:InicioComponent},
    {path:'usuarios',component:UsuariosComponent},
    {path:'reportes',component:ReportesComponent},
    {path:'inicio',component:InicioComponent},
    {path:'crear-usuario',component:CrearUsarioComponent},
    {path:'crear-ropa',component:CrearRopaComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
