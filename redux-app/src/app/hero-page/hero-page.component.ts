import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  // imports: [UpperCasePipe],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {

  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    const description = `Hero: ${this.name()}, Age: ${this.age()}`;
    return description;
  });

  nameUpperCase = computed(() => this.name().toUpperCase());

  getHeroDescription() {
    return `Hero: ${this.name()}, Age: ${this.age()}`;
  }

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
    console.log('Hero changed to:', this.getHeroDescription());
  }
  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
    console.log('Hero reset to:', this.getHeroDescription());
  }

  chageAge() {
    this.age.set(60);
    console.log('Hero age change:', this.getHeroDescription());
  }
}
