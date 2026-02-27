import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GifsListComponent } from "../../components/gifs-list/gifs-list.component";
import { GifService } from '../../services/gif.service';
import { Gif } from '../../interfaces/gif-interface';

@Component({
  templateUrl: './search-page.component.html',
  imports: [GifsListComponent],
})
export class SearchPageComponent {

  giphService = inject(GifService);

  gifs = signal<Gif[]>([]);

  onSeach(query: string) {
    console.log('Search query:', query);
    this.giphService.searchTrendingGifs(query)
    .subscribe({
      next: (gifs) => {
        console.log('Search results:', gifs);
        this.gifs.set(gifs);
      },
      error: (error) => {
        console.error('Error fetching search results:', error);
      }
    });
  }
}
