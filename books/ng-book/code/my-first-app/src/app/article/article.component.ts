import { Component, HostBinding, Input, OnInit } from "@angular/core";
import { Article } from "./article.model";



@Component({
  selector: "app-article",
  template: `
  <div class="four wide column center aligned votes">
    <div class="ui statistic">
        <div class="value">
        {{ article.votes }}
        </div>
        <div class="label">
        Points
        </div>
    </div>
 </div>
 <div class="twelve wide column">
    <a class="ui large header" href="{{ article.link }}">
    {{ article.title }}
    </a>
    <div class="meta">({{ article.domain() }})</div>
    <ul class="ui big horizontal list voters">
      <li class="item">
        <a href (click)="voteUp()">
          <i class="arrow up icon"></i>
          upvote
        </a>
      </li>
      <li class="item">
        <a href (click)="voteDown()">
          <i class="arrow down icon"></i>
          downvote
          </a>
      </li>
    </ul>
 </div>
  `,
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  // votes: number;
  // link: string;
  // title: string;

  //article: Article;

  @Input() article!: Article;

  constructor() {

    // this.votes = 10;
    // this.link = "https://www.google.com";
    // this.title = "Angular 6";
    // lo llevamos a un Objeto para tener toda la información relacionada con el artículo en un solo lugar
    //this.article = new Article("Angular 6", "https://www.google.com", 10);
  }


  voteUp() {
    this.article.voteUp();
    return false;
  }

  voteDown() {
    this.article.voteDown();
    return false;
  }

  ngOnInit(): void {}
}
