import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {
  // Variables para almacenar datos del formulario
  tipoCredito: string = '';
  valorCredito: number | null = null;
  tiempoCredito: number | null = null;
  sistemaAmortizacion: string = '';

  // Función para manejar el envío del formulario
  onEnviar() {
    // Lógica para manejar el envío del formulario
    console.log('Formulario enviado');
    console.log('Tipo de Crédito:', this.tipoCredito);
    console.log('Valor de Crédito:', this.valorCredito);
    console.log('Tiempo de Crédito:', this.tiempoCredito);
    console.log('Sistema de Amortización:', this.sistemaAmortizacion);
  }

  // Otras funciones para manejar eventos como cambios en los campos del formulario
  onChangeTipoCredito(event: any) {
    this.tipoCredito = event.target.value;
  }

  onChangeMonto(event: any) {
    this.valorCredito = +event.target.value;
    // Aquí puedes realizar lógica adicional si es necesario
  }

  onRango2(event: any) {
    // Lógica para manejar cambios en el rango 2
  }

  onChangeTiempo(event: any) {
    this.tiempoCredito = +event.target.value;
    // Aquí puedes realizar lógica adicional si es necesario
  }

  onRango(event: any) {
    // Lógica para manejar cambios en el rango
  }

  limpiarValores() {
    // Lógica para limpiar los valores del formulario
    this.tipoCredito = '';
    this.valorCredito = null;
    this.tiempoCredito = null;
    this.sistemaAmortizacion = '';
  }
}
