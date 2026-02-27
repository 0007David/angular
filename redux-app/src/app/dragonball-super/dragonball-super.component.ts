import { Component, computed, inject, signal } from '@angular/core';
import { CharacterListComponent } from './character-list/character-list.component';
import type { Character } from '../interfaces/character.interface';
import { CharacterAddComponent } from './character-add/character-add.component';
import { DragonballSuperService } from '../service/dragonball-super.service';


@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super.component.html',
  styleUrl: './dragonball-super.component.css'
})
export class DragonballSuperComponent {

  public dragonballService = inject(DragonballSuperService);
  
}
