import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../..//services/people/people.service';
import { Person } from '../..//models/person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.sass']
})
export class PeopleComponent implements OnInit {
  people: Person[];
  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.list().subscribe((data)=>{
      this.people = data;
    });
  }

}
