import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NietoComponent } from '../nieto/nieto.component';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { selectContador } from '../contador.selectors';
import * as ContadorActions from '../contador.actions';

@Component({
  standalone: true,
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: ``,
  imports: [NietoComponent]
})
export class HijoComponent implements OnInit {

  contador: number;

  constructor( private store: Store<AppState> ) {
    this.contador = 0;
  }
  ngOnInit(): void {
    this.store.select(selectContador)
      .subscribe((contador: number) => this.contador = contador);
  }

  public multiplicar(): void {
    //this.contador *= 2;
    const action = ContadorActions.multiplicar({ multiplicador: 2 });
    //this.contadorChange.emit(this.contador);
    this.store.dispatch(action);
  }

  public dividir(): void {
    //this.contador /= 2;
    const action = ContadorActions.dividir({ divisor: 2 });
    //this.contadorChange.emit(this.contador);
    this.store.dispatch(action);
  }

  public handlerContadorCambio(nuevoContador: number): void {
    this.contador = nuevoContador;
    //this.contadorChange.emit(this.contador);
  }

}
