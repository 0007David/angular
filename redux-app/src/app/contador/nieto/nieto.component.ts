import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { selectContador } from '../contador.selectors';
import * as ContadorActions from '../contador.actions';

@Component({
  standalone: true,
  selector: 'app-nieto',
  imports: [],
  templateUrl: './nieto.component.html',
  styles: ``
})
export class NietoComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppState>) {
    this.contador = 0;
  }
  ngOnInit(): void {
    this.store.select(selectContador)
      .subscribe((contador: number) => {
        this.contador = contador
        console.log('NietoComponent contador: ', contador);
      });  
  }

  public resetContador(): void {
    //this.contador = 0;
    const action = ContadorActions.resetear(); 
    //this.contadorChange.emit(this.contador);
    this.store.dispatch(action);
  }
}
