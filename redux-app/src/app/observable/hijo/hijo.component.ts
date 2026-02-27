import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../service/data.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hijo',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent implements OnInit, OnDestroy {

  mensaje: string = 'Mensaje!';
  unSubscribe: Subscription = new Subscription();

  items = [
    { id: 1, name: 'Juan', input: '' },
    { id: 2, name: 'María', input: '' },
    { id: 3, name: 'Carlos', input: '' }
  ];

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    console.log('onInit');
    // this.unSubscribe = this.dataService.nombre$.subscribe(
    //   texto => {
    //     this.mensaje = texto;
    //     console.log('Hijo:', texto);
    //   },
    //   error => {
    //     console.error('Error in hijo component:', error);
    //   }
    // );

    //this.dataService.nombre$.emit('Hijo!');
    
  }

  trackById(index: number, item: { id: number }): number {
    return item.id;
  }

  shuffle() {
    this.items = [...this.items].sort(() => Math.random() - 0.5);
  }

  ngOnDestroy(): void {
    console.log('onDestroy');
    // this.unSubscribe.unsubscribe();    
  }

}
