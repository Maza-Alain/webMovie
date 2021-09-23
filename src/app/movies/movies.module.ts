import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { SearchComponent } from './components/search/search.component';
import { RouterModule } from '@angular/router';
import { MoviesRoutingModule } from './movies-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { MovieComponent } from './pages/movie/movie.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MovieCardComponent,
    SearchComponent,
    HomeComponent,
    ListComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MoviesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class MoviesModule { }
