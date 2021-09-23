import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interfaces/list.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styles: [`
    mat-card{
      margin-top: .5rem;
    }
    button{
      width:90%;
    }
  `
  ]
})
export class MovieCardComponent implements OnInit {
  @Input () movie!:Movie;
  baseUrl:string = 'https://image.tmdb.org/t/p/w500';
  constructor() { }

  ngOnInit(): void {
  }

}
