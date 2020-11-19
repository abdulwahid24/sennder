import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie';
import { API_ENDPOINT } from '../../config/environments'
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {}

  list(): Observable<Movie[]> {
    return this.http.get<Movie[]>(API_ENDPOINT + '/movies')
  }

}
