import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

//creamos una ruta para el login 

const routes: Routes = [
  //ruta al componente login
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule )},
  //redireccion al login si se coloca una url diferente 
  {path:'**',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
