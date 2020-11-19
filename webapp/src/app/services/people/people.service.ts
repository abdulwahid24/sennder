import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../..//models/person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  list(): Observable<Person[]> {
    return this.http.get<Person[]>('https://api.sennder.abdulwahid.info/people')
  }

}
