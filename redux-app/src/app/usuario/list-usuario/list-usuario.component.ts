import { Component } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { CardUsuarioComponent } from '../card-usuario/card-usuario.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-usuario',
  imports: [CardUsuarioComponent, CommonModule],
  templateUrl: './list-usuario.component.html',
  styleUrl: './list-usuario.component.css'
})
export class ListUsuarioComponent {

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
