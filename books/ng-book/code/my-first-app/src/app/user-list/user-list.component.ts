import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'user-list',
  template: `
    <ul>
      <li *ngFor="let name of names">
        <app-user-item [name]="name"></app-user-item>
      </li>
    </ul>
  `,
})
export class UserListComponent implements OnInit {
  names: string[];

  constructor() {
    this.names = ['Arie', 'Carlos', 'Felipe', 'Nate'];
  }

  ngOnInit(): void {
  }

}
