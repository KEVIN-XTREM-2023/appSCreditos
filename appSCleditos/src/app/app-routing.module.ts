import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormularioCreditoModule } from './formulario-credito/formulario-credito.module';


const routes: Routes = [
  { path: '', component: LoginPageComponent },
  /* { path: '', redirectTo: '/formulario-credito', pathMatch: 'full' },
  { path: 'formulario-credito',loadChildren: () => import('./formulario-credito/formulario-credito.module').then(m => m.FormularioCreditoModule)
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }
