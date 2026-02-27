import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { GifService } from '../../services/gif.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifsListComponent } from '../../components/gifs-list/gifs-list.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'gif-history',
  imports: [ GifsListComponent, JsonPipe ],
  templateUrl: './gif-history.component.html',
})
export class GifHistoryComponent { 
  gifService = inject(GifService);

  query = toSignal(inject(ActivatedRoute).params.pipe(
    map( (params) => params['query']),
  ));

  gifsByKey = computed( () => {
    // console.log('gifsByKey', this.gifService.searchHistoryGifs(),  'query', this.query());   
    // console.log(this.query(), this.gifService.searchHistoryGifs()[this.query()]); 
    return this.gifService.searchHistoryGifs()[ this.query().toUpperCase() ] ?? [];
  });

}
