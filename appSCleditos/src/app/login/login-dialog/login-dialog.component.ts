import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from '../../services/login/login.service';
import { EmmitterService } from '../../services/emitter/emitter.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.css',

})
export class LoginDialogComponent {
 
  usuario: any = {
    email: '',
    password: ''
  }

  
  
  error: boolean = false
  strError: string = "Los datos no son correctos"
  nombre: string="" 
  apellido: string="" 
  longEmail: number | undefined = 0;
  longPassword: number | undefined = 0;


  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>, 
    private loginServicio: LoginService,
    public _evetEmiter: EmmitterService
    ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  controlErrores(): boolean {
    this.longEmail = this.usuario['email']?.length;
    this.longPassword = this.usuario['password']?.length;
    if (this.longEmail == 0 || this.longPassword == 0) {
      this.error = true;
      this.strError = "Todos los Datos son Obligatorio";
      return false
    }
    return true
  }

  login() {
    this.error = false;
    if(this.controlErrores()){
      let tabla: any = []
      this.loginServicio.login(this.usuario.email,this.usuario.password).subscribe(
        res => {
          if (Object.keys(res).length  > 0) {
            tabla = res;
            //this.usuarioEnv = tabla[0];
            localStorage.setItem("system", "true")
            localStorage.setItem("nombre", tabla[0]['nom_adm']);
            localStorage.setItem("apellido", tabla[0]['ape_adm']);
            console.log("ingreso correcto")
            this._evetEmiter.setShowUser(true)
            window.location.reload()
          } else {
            this.error = true;
            this.strError = "Datos Incorrectos";
          }
  
        },
        err => console.error(err)
      );
      
    }else{
      this.error = true;
    }
    
  } 

  


}
