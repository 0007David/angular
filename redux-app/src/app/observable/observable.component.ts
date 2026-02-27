import { Component } from '@angular/core';
import { HijoComponent } from './hijo/hijo.component';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-observable',
  imports: [HijoComponent],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent {

  constructor(private dataService: DataService) { }

  changeNombre() {
    this.dataService.nombre$.emit('Dave!');
    console.log('changeNombre...');
    
  }
}
