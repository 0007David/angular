import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-pipe-example',
  imports: [CommonModule, CurrencyPipe, DatePipe, TitleCasePipe, UpperCasePipe],
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.css'
})
export class PipeExampleComponent {

  amount = 123.45;
  company = 'acme corporation';
  purchasedOn = '2024-07-08';
  scheduledOn = new Date('2024-07-15T10:00:00');

  count: number = 0;
  showTemplate: boolean = true;

   @ViewChild('myFragment', {read: TemplateRef}) fragmentOne: TemplateRef<unknown> | undefined;

  constructor() { }
}
