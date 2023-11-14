import { Component, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {
  @ViewChild('tipoCreditoRef') tipoCreditoRef: any;
  @ViewChild('montoRef') montoRef: any;
  @ViewChild('plazoRef') plazoRef: any;
  @ViewChild('sistemaAmortizacionRef') sistemaAmortizacionRef: any;

  tablaAmortizacion: any[] = [];

  constructor(private amortizationService: ServiceService) {
    this.tablaAmortizacion = [];
  }

  calcularAmortizacion() {
    const tipoCreditoElement = document.getElementById('tipo_credito') as HTMLSelectElement;
    const montoElement = document.getElementById('monto') as HTMLInputElement;
    const plazoElement = document.getElementById('plazo') as HTMLInputElement;
    const sistemaAmortizacionElement = document.getElementById('sistema_amortizacion') as HTMLSelectElement;
  
    if (
      tipoCreditoElement &&
      montoElement &&
      plazoElement &&
      sistemaAmortizacionElement
    ) {
      const tipoCredito = tipoCreditoElement.value;
      const monto = parseFloat(montoElement.value);
      const plazo = parseFloat(plazoElement.value);
      const sistemaAmortizacion = sistemaAmortizacionElement.value;
  
      this.tablaAmortizacion = this.amortizationService.calcularAmortizacion(
        tipoCredito,
        monto,
        plazo,
        sistemaAmortizacion
      );
    }
  }
  
  
}
