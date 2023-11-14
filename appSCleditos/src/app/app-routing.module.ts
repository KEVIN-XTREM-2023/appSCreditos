import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioCreditoModule } from './formulario-credito/formulario-credito.module';

const routes: Routes = [
  { path: '', redirectTo: '/formulario-credito', pathMatch: 'full' },
  { path: 'formulario-credito', component: FormularioCreditoModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
