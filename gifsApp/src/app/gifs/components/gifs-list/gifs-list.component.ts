import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GifsListItemComponent } from "../gifs-list-item/gifs-list-item.component";

interface Gif {
  id: string;
  title: string;
  url: string;
}
@Component({
  selector: 'gifs-list',
  imports: [GifsListItemComponent],
  templateUrl: './gifs-list.component.html',
})
export class GifsListComponent {

  items= input.required<Gif[]>();
}
