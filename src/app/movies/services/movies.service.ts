import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genres } from '../interfaces/genre.interface';
import { List, Movie } from '../interfaces/list.interface';
import { Results } from '../interfaces/results.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiKey:string = '41969ae254ac0cd4fcff3a33301452fa';
  baseUrl:string = 'https://api.themoviedb.org/3';
  genresUrl:string = `${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}&language=en`
  listUrl:string = ` ${this.baseUrl}/list/1?api_key=${this.apiKey}&language=en-US`
  public mainmovies: Movie[] = [];

  
  constructor(private http:HttpClient) { }
  
  getGenres():Observable<Genres>{
    return this.http.get<Genres>(this.genresUrl);
  }

  getList()/* :Observable<List> */{
    
    /* return  */
    this.http.get<List>(this.listUrl)
    .subscribe((movies) =>this.mainmovies = movies.items)

   
  }
  getMovieById(id:number):Observable<Movie>{
    const url=` ${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&language=en-US`;
    return this.http.get<Movie>(url);
  }
  genreSearch(query:string)/* :Observable<Movie[]> */{
    const url=` ${this.baseUrl}/search/movie?api_key=${this.apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;
    /* return  */
    this.http.get<Results>(url)
    .subscribe((movies) =>this.mainmovies = movies.results)
  }
 /*  getQueryByGenre(query:string){
    this.genreQuery = query;
    
  } */
 /*  changeMainMovies(movies:Movie[]):<Movie[]>{
    return movies
  } */
}
