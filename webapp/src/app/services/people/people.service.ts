import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../..//models/person';
import { API_ENDPOINT } from '../../config/environments'

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  list(): Observable<Person[]> {
    return this.http.get<Person[]>(API_ENDPOINT + '/people')
  }

}
