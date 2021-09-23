import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../interfaces/list.interface';
import { MoviesService } from '../../services/movies.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: [`
    button{
      margin-top:1rem;
    }
    img{
      width:100%;
    }
  `
  ]
})
export class MovieComponent implements OnInit {
  movie!:Movie;
  baseUrl:string = 'https://image.tmdb.org/t/p/w500';

  constructor(private moviesService:MoviesService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id})=>this.moviesService.getMovieById(id))
      )
      .subscribe(movie => this.movie = movie)
  }

}
