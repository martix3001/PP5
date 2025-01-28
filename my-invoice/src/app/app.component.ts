import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvoiceModule } from './invoice/invoice.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    CommonModule,
    InvoiceModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Marta';
  nazwisko = "Styczeń"
}
