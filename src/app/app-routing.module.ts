import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PagosComponent } from './pages/pagos/pagos.component';

import { ParkingComponent } from './pages/parking/parking.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

import { TermsConditionComponent } from './pages/terms-condition/terms-condition.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
    },
    {
    path : 'login',
    component : LoginComponent
    },
    {
    path : 'about',
    component : AboutComponent
    },
    {
    path : 'terms-condition',
    component : TermsConditionComponent
    },
    {
    path : 'parking',
    component : ParkingComponent
    },
    {
    path : 'perfil',
    component : PerfilComponent
    },
    {
    path : 'pagos',
    component : PagosComponent
    }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
