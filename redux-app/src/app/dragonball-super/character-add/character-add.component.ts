import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import type { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAddComponent {
  name = signal<string>('');
  power = signal<number>(0);
  newCharacter = output<Character>();


  addCharacter() {
    console.log('Adding character:', this.name(), this.power());
    if(!this.name() || !this.power() || this.power() <= 0) { 
      return;
    }
    const newCharacter: Character = { 
      id: Math.floor(Math.random() * 1000),
      name: this.name(), 
      power: this.power() 
    };
    this.newCharacter.emit(newCharacter);
    // this.characters.update(chars => [...chars, newCharacter ]); // recomandado
    //this.characters().push(newCharacter); // no recomendado, pero funciona
    this._resetFields();
  }

  private _resetFields(): void {
    this.name.set('');
    this.power.set(0);
  }



}
