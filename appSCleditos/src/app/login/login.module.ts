import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { LoginPageComponent } from './login-page/login-page.component';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { FormularioCreditoModule } from '../formulario-credito/formulario-credito.module';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginDialogComponent
  ], 
  imports: [ 
    CommonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    FormularioCreditoModule
  ],
  exports :[ 
    MatIconModule,
    MatDialogModule,
    LoginPageComponent,
    LoginDialogComponent
  ]  
})
export class LoginModule { }
