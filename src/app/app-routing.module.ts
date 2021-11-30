import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AportadorComponent } from './components/public/aportador/aportador.component';
import { HomeComponent } from './components/public/home/home.component';
import { VoluntarioComponent } from './components/public/voluntario/voluntario.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'soyvoluntario', component: VoluntarioComponent },
  { path: 'quieroaportar', component: AportadorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
