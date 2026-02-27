import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-card-usuario',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './card-usuario.component.html',
  styleUrl: './card-usuario.component.css'
})
export class CardUsuarioComponent implements OnInit {

  @Input() user: any;

  imagenUrl: string = 'https://www.w3schools.com/howto/img_avatar.png';
  nombre: string = 'John Doe';
  email: string = 'john@gmail.com';
  isActivo: boolean = false;
  id: number = 0;

  constructor() {
    // Initialization logic can go here if needed
  }

  ngOnInit(): void {
    if (this.user) {
      this.imagenUrl = this.user.avatar || this.imagenUrl;
      this.nombre = this.user.name || this.nombre;
      this.email = this.user.email || this.email;
      this.isActivo = this.user.status === 'active';
      this.id = this.user.id || 0;
    }
  }

  getClassBtn() {
    return this.isActivo ? 'btn btn-primary' : 'btn btn-danger';
  }

}
