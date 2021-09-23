import { Component } from '@angular/core';

import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent  {
  termino:string= '';
  constructor(private moviesService:MoviesService) { }

  

  searchMovie(){
   
    this.moviesService.genreSearch(this.termino)
  }
}
