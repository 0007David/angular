import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UsuarioService } from '../../service/usuario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-usuario',
  imports: [RouterLink, CommonModule],
  templateUrl: './show-usuario.component.html',
  styleUrl: './show-usuario.component.css'
})
export class ShowUsuarioComponent implements OnInit {

  id: number;
  email: string;
  name: string;
  gender: string;
  status: string;

  loading: boolean = true;

  private readonly route = inject(ActivatedRoute);

  constructor(private usuarioService: UsuarioService) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Usuario Id = ' + this.id);
    this.email = '';
    this.name = '';
    this.gender = '';
    this.status = '';
  }

  ngOnInit(): void {
      this.usuarioService.getUsuario(this.id).subscribe(
        data => {
          console.log('Data usuario', data);
          this.email = data.email;
          this.name = data.name;
          this.gender = data.gender;
          this.status = data.status;
          this.loading = false;
        }
      )
  }

}
