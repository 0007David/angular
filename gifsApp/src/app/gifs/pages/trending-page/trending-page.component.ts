import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { GifsListComponent } from "../../components/gifs-list/gifs-list.component";
import { GifService } from '../../services/gif.service';

// const gifsList = [
//     { id: '4', title: 'Gif 4', url:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg'},
//     { id: '15', title: 'Gif 15', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg'},
//     { id: '5', title: 'Gif 5', url:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg'},
//     { id: '6', title: 'Gif 6', url:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg'},
//     { id: '7', title: 'Gif 7', url:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg'},
//     { id: '8', title: 'Gif 8', url:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg'},
//     { id: '9', title: 'Gif 9', url:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg'},
//     { id: '10', title: 'Gif 10', url:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg'},
//     { id: '11', title: 'Gif 11', url:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg'},
//     { id: '12', title: 'Gif 12', url:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg'},
//     { id: '13', title: 'Gif 13', url:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg'},
//     { id: '14', title: 'Gif 14', url:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg'},
//     { id: '2', title: 'Gif 2', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-12.jpg'},
//     { id: '3', title: 'Gif 3', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-13.jpg'},
//     { id: '1', title: 'Gif 1', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-14.jpg'},
//     { id: '16', title: 'Gif 15', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-15.jpg'},
//   ];

@Component({
  templateUrl: './trending-page.component.html',
  imports: [GifsListComponent],  
})
export class TrendingPageComponent implements OnInit {
  

  gifService = inject(GifService);

  //gifsImages = computed(() => this.gifService.trendingGifs());


  ngOnInit(): void {
    this.gifService.loadTrendingGifs();
  } 
}
