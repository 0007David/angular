import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  template: `
  <p> Hello {{ name }} </p>
  `,
  styles: [``]
})
export class UserItemComponent implements OnInit {

  @Input()
  name!: string;

  constructor() {

  }

  ngOnInit(): void {
  }

}
