import { effect, Injectable, signal } from '@angular/core';
import type { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
};

@Injectable({
  providedIn: 'root'
})
export class DragonballSuperService {

  characters = signal<Character[]>((loadFromLocalStorage()));

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  })

  public handleAddCharacter(newCharacter: Character): void {
    //console.log('New character received:', newCharacter);
    this.characters.update(chars => [...chars, newCharacter]);
  }
}
