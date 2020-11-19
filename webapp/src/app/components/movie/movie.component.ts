import { Component, OnInit } from '@angular/core';
import { MovieService } from '../..//services/movie/movie.service';
import { Movie } from '../..//models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit {
  movies :  Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.list().subscribe((data)=>{
      this.movies = data;
    });
  }

}
