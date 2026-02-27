import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardUsuarioComponent } from './card-usuario/card-usuario.component';
import { UsuarioService } from '../service/usuario.service';
import { ListUsuarioComponent } from './list-usuario/list-usuario.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-usuario',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit {

  listUsuarios: any[] = [];
  loading: boolean = true;
 
  constructor(private userService: UsuarioService) { }

  ngOnInit(): void {
    console.log('UsuarioComponent initialized');
      this.userService.getUsuarios().subscribe({
        next: (data) => {
          console.log('Usuarios fetched successfully:', data);
          this.listUsuarios = data;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error fetching usuarios:', error);
        },
        complete: () => {
          console.log('Fetch usuarios completed');
        }
      });
  }

}
