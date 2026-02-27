import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';

import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { GifMapper } from '../mapper/gif.mapper';
import type { Gif } from '../interfaces/gif-interface';
import { map, Observable, tap } from 'rxjs';

const GIF_KEY = 'gifs';

const loadFromLocalStorage = () => {
  const historyString = localStorage.getItem(GIF_KEY)?? '{}'; // Record<string, Gif[]>
  const gifs = JSON.parse(historyString) as Record<string, Gif[]>;
  console.log({gifs});
  return gifs;
};

@Injectable({
  providedIn: 'root'
})
export class GifService {
  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal<boolean>(true);

  searchHistoryGifs = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistoryGifsKeys = computed(() => Object.keys(this.searchHistoryGifs()));

  // constructor() {
  //   this.loadTrendingGifs();
  // }

  saveGifsToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistoryGifs());
    localStorage.setItem(GIF_KEY, historyString);
  });

  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.giphyApiUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: '25',
        rating: 'g' 
      }
    }).subscribe( {
      next: (resp) => {        
        const gifs = GifMapper.mapGiphyItemstoGifs(resp.data);
        console.log({ gifs });
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
      },
      error: (error) => {
        console.error({ error });
      }
    });
  }

  searchTrendingGifs(query: string): Observable<Gif[]> {
    return this.http.get<GiphyResponse>(`${environment.giphyApiUrl}/gifs/search`, {
      params: {
        api_key: environment.giphyApiKey,
        q: query,
        limit: '25',
        //rating: 'g'
      }
    })
    .pipe(
      map( ({data}) => GifMapper.mapGiphyItemstoGifs(data)),
      // TODO: hacer historial
      tap( items => {
        console.log({items});
        this.searchHistoryGifs.update( (history) => ({
          ...history,
          [query.toUpperCase()]: items
        }));
      }),
    );
  }

}
