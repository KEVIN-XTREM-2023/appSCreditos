import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesComponent } from './reportes/reportes.component'; 



@NgModule({
  declarations: [ReportesComponent],
  imports: [
    CommonModule
  ], exports :[
    ReportesComponent,
    ReportesComponent
  ]
})
export class ReportModule { }
