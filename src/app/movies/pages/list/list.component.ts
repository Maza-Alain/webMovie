
import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/list.interface';
import { MoviesService } from '../../services/movies.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  /* mainmovies: Movie[] = []; */
 
  constructor(private moviesService:MoviesService,
    private homre:HomeComponent) { }

  ngOnInit(): void {
   
    this.moviesService.getList()
  

    
  }

  get allMovies(){
    return this.moviesService.mainmovies
  }

  

  
 

  
}
