import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
  
})
export class HeaderComponent implements OnInit {

  mensaje: string = 'Navbar!!';

  constructor(private dataService: DataService) {
    
  }
  ngOnInit(): void {
      this.dataService.nombre$.subscribe( texto => {
        this.mensaje = texto;
        console.log('navbar:', texto);
      },
      error => {
        console.error('Error in header component:', error);
      }
    );
  }

}
