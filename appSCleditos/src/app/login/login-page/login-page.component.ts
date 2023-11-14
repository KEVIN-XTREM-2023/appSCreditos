import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { EmmitterService } from '../../services/emitter/emitter.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  valUsuario: string = ''
  valImagen: string = ''
  valTitulo: string = ''
  inputImage: string = ''
  inputTitulo: string = ''
  btnEditarImagen: boolean=false
  btnEditarTitulo: boolean=false

  constructor(public dialog: MatDialog,
    public _eventEmitter: EmmitterService) { 

      const image = localStorage.getItem('image');
      const title = localStorage.getItem('title');
      const nomb = localStorage.getItem('nombre');
      const ape = localStorage.getItem('apellido');
      if (image) {
        this.valImagen = image.toString()

      }
      if (title) {
        this.valTitulo = title.toString()

      }
      if (nomb) {
        
        this.valUsuario = (nomb ?? "") + " " + (ape ?? "")
        
      }
    }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '300px',
      position: {  top: '5px', left: '1200px' }, 
    });

    // You can subscribe to the dialog's afterClosed observable to handle the result
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
    });
  }

  logout() {
    
    localStorage.setItem("system", "false")
    localStorage.setItem("nombre", "")
    localStorage.setItem("apellido", "")
    this._eventEmitter.setShowUser(false)
    window.location.reload()
  } 

  guardarImage() {
    this.valImagen=this.inputImage
    localStorage.setItem("image", this.valImagen)
    this.cancelarEditImage()
  }

  guardarTitulo() {
    this.valTitulo=this.inputTitulo
    localStorage.setItem("title", this.valTitulo)
    this.cancelarEditTitulo()
  }

  editImage() {
    this.btnEditarImagen=true
  }
  editTitle() {
    this.btnEditarTitulo=true
  }

  cancelarEditImage() {
    this.btnEditarImagen=false
    this.inputImage = ''
  }
  cancelarEditTitulo() {
    this.btnEditarTitulo=false
    this.inputTitulo = ''
  }

}
