import { Component, OnInit} from '@angular/core';
import { Genre, Genres } from '../../interfaces/genre.interface';
import { Movie } from '../../interfaces/list.interface';
import { MoviesService } from '../../services/movies.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .container {
        margin: 0.8rem;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  genres: Genre[] = [];
  moviesByGenre:Movie[] = []

  /* public mainmovies: Movie[] = []; */
 

  constructor(private moviesService: MoviesService,
               /* private list: ListComponent  */) {}

  ngOnInit(): void {
   /*  this.moviesService.getList() */
      /* .subscribe(movies => this.mainmovies = movies.items); */

    this.moviesService
      .getGenres()
      .subscribe((genres) => (this.genres = genres.genres));
  }
  searchGenre(genre: string) {
    this.moviesService.genreSearch(genre)
    /* this.moviesService.genreSearch(genre)
      .subscribe(movies => this.mainmovies = movies) */
    
  }
 
}
