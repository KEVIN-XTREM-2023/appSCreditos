import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioCreditoModule } from './formulario-credito/formulario-credito.module';

const routes: Routes = [
  { path: '', redirectTo: '/formulario-credito', pathMatch: 'full' },
  {
    path: 'formulario-credito',
    loadChildren: () => import('./formulario-credito/formulario-credito.module').then(m => m.FormularioCreditoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
