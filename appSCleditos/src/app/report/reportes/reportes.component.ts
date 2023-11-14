import { Component,ElementRef  } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css'
})
export class ReportesComponent {
  constructor(private el: ElementRef) {}

  print(): void {
    window.print();
  }
}
