import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  nombre$: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }


}
