import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioCreditoRoutingModule } from './formulario-credito-routing.module';
import { PageComponent } from './page/page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    FormularioCreditoRoutingModule,
    FormsModule,
  ]
})
export class FormularioCreditoModule { }
