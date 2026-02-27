import { Component } from '@angular/core';
import { HijoComponent } from '../contador/hijo/hijo.component';
import { AppState } from '../store/app.state';
import { Action, Store } from '@ngrx/store';

import * as ContadorActions  from '../contador/contador.actions';
import { selectContador } from '../contador/contador.selectors';

@Component({
  selector: 'app-home',
  imports: [HijoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  contador: number = 0;

  constructor(private store: Store<AppState>) { }

   public incrementar(): void {
      const action: Action = ContadorActions .incrementar(); 
      this.store.dispatch(action);
    }
  
    public decrementar(): void {
      const action: Action = ContadorActions.decrementar(); 
      this.store.dispatch(action);
    }

    ngOnInit(): void {
        this.store.select(selectContador)
          .subscribe((contador: number) => this.contador = contador);    
      }
}
