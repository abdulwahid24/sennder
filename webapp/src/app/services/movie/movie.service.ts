import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../..//models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {}

  list(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:8000/movies')
  }

}
