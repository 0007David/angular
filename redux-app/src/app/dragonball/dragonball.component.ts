import { Component, computed, signal } from '@angular/core';
import type { Character } from '../interfaces/character.interface';


@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.css'
})
export class DragonballComponent {

  name = signal<string>('');
  power = signal<number>(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    // { id: 2, name: 'Vegeta', power: 8500 },
    // { id: 3, name: 'Piccolo', power: 8000 },
    // { id: 4, name: 'Frieza', power: 10000 },
    // { id: 5, name: 'Cell', power: 9500 },
    // { id: 6, name: 'Yamcha', power: 5000 }
  ]);

  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': true
  //   };
  // });

  addCharacter() {
    console.log('Adding character:', this.name(), this.power());
    if(!this.name() || !this.power() || this.power() <= 0) { 
      return;
    }
    const newCharacter: Character = { 
      id: this.characters.length + 1, 
      name: this.name(), 
      power: this.power() 
    };
    this.characters.update(chars => [...chars, newCharacter ]); // recomandado
    //this.characters().push(newCharacter); // no recomendado, pero funciona
    this._resetFields();
  }

  private _resetFields(): void {
    this.name.set('');
    this.power.set(0);
  }

}
