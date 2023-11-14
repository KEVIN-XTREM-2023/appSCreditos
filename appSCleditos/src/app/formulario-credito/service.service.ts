import { Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  calcularAmortizacion(
    tipoCredito: string,
    monto: number,
    plazo: number,
    sistemaAmortizacion: string
  ): any[] {
    const tablaAmortizacion = [];
    const tasaInteresAnual = this.obtenerTasaInteresAnual(tipoCredito); 
    const tasaInteresMensual = tasaInteresAnual / 100; 

    if (sistemaAmortizacion === '1') {
      // Sistema Francés (Cuota Fija)
      const cuotaMensual = monto * (tasaInteresMensual / 12) / (1 - Math.pow(1 + tasaInteresMensual / 12, -plazo));

      let saldoPendiente = monto;
        // Imprime por consola los valores
      //console.log(`   - monto: ${monto}`);
      //console.log(`   - Interés Mensual: ${tasaInteresMensual}`);
      //console.log(`   - plazo: ${plazo}`);
      //console.log(`   - tasaInteresMensual: ${tasaInteresMensual/12}`);
      //console.log(`   - deno: ${1-Math.pow(1+(tasaInteresMensual/12),-plazo)}`);

      for (let cuotaNo = 1; cuotaNo <= plazo; cuotaNo++) {
        const interes = (saldoPendiente * tasaInteresMensual) / 12;
        const abono = cuotaMensual - interes;
        saldoPendiente -= abono;

        tablaAmortizacion.push({
          CuotaNo: cuotaNo,
          Capital: (cuotaMensual - interes).toFixed(2),
          Interes: interes.toFixed(2),
          Cuota: cuotaMensual.toFixed(2),
          Saldo: saldoPendiente.toFixed(2)
        });
        
      }
    } else if (sistemaAmortizacion === '2') {
      // Sistema Alemán (Cuota Variable)
      const cuotaMensual = monto / plazo;
      let saldoPendiente = monto;

      for (let cuotaNo = 1; cuotaNo <= plazo; cuotaNo++) {
        const interes = (saldoPendiente * tasaInteresMensual) / 12;
        saldoPendiente -= cuotaMensual;

        tablaAmortizacion.push({
          CuotaNo: cuotaNo,
          Capital: cuotaMensual.toFixed(2),
          Interes: interes.toFixed(2),
          Cuota: (cuotaMensual + interes).toFixed(2),
          Saldo: saldoPendiente.toFixed(2)
        });
      
      }

    }

    return tablaAmortizacion;
  }

  private tasasDeInteres: { [key: string]: number } = {
    '1': 10.4,
    '2': 9.3,
    '3': 8.3,
    '4': 14,
    '5': 17.99,
    '6': 9.5,
    '7': 12.2
  };

  obtenerTasaInteresAnual(tipoCredito: string): number {
    // Verificar si el tipo de crédito existe en el mapa
    if (this.tasasDeInteres.hasOwnProperty(tipoCredito)) {
      // Devolver la tasa de interés correspondiente
      return this.tasasDeInteres[tipoCredito];
    } else {
      // Si el tipo de crédito no está en el mapa, devolver un valor predeterminado
      return 0.1; // Este valor es solo un ejemplo, ajusta según tus necesidades
    }
  }

}

@Component({
  selector: 'app-page',
  template: `
    <form (ngSubmit)="calcularAmortizacion()">
      <label for="tipo_credito">Tipo de Crédito:</label>
      <select name="tipo_credito" id="tipo_credito" required #tipoCreditoRef>
          <option disabled value="" selected>Seleccionar un elemento</option>
          <option value="1">PRODUCTIVO PYMES (10.4%)</option>
          <option value="2">PRODUCTIVO EMPRESARIAL (9.3%)</option>
          <option value="3">PRODUCTIVO CORPORATIVO (8.3%)</option>
          <option value="4">CONSUMO (14%)</option>
          <option value="5">MICROCREDITO (17.99%)</option>
          <option value="6">VIVIENDA (9.5%)</option>
          <option value="7">ESTUDIANTIL (12.2%)</option>
          <option value="8">MAESTRÍAS (12.2%)</option>
          <option value="9">PHD (12.2%)</option>
      </select>

      <br>

      <label for="monto">Monto:</label>
      <input type="number" name="monto" id="monto" required #montoRef>

      <br>

      <label for="plazo">Plazo (en meses):</label>
      <input type="number" name="plazo" id="plazo" required #plazoRef>

      <br>

      <label for="sistema_amortizacion">Sistema de Amortización:</label>
      <select name="sistema_amortizacion" id="sistema_amortizacion" required #sistemaAmortizacionRef>
          <option value="1">FRANCÉS (CUOTA FIJA)</option>
          <option value="2">ALEMÁN (CUOTA VARIABLE)</option>
      </select>

      <br>

      <input type="submit" value="Calcular">
    </form>

    <div *ngIf="tablaAmortizacion.length > 0">
      <h2>Tabla de Amortización</h2>
      <table>
        <thead>
          <tr>
            <th>Cuota No.</th>
            <th>Capital</th>
            <th>Interés</th>
            <th>Cuota</th>
            <th>Saldo</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of tablaAmortizacion">
            <td>{{ row.CuotaNo }}</td>
            <td>{{ row.Capital }}</td>
            <td>{{ row.Interes }}</td>
            <td>{{ row.Cuota }}</td>
            <td>{{ row.Saldo }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class PageComponent {
  tipoCredito: string = '';
  monto: number = 0;
  plazo: number = 0;
  sistemaAmortizacion: string = '';
  tablaAmortizacion: any[] = [];

  constructor(private amortizationService: ServiceService) {
    this.tablaAmortizacion = [];
  }

  calcularAmortizacion() {
    this.tablaAmortizacion = this.amortizationService.calcularAmortizacion(
      this.tipoCredito,
      this.monto,
      this.plazo,
      this.sistemaAmortizacion
    );
  }
}

