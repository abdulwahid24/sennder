import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { Location } from "@angular/common";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  constructor(public location: Location, public route: ActivatedRoute, public router: Router, private modalService: NgbModal) {}

  brand_name = 'Sennder';
  searchForm = FormGroup;
  faAddPerson = faUserPlus;
  faAddRecord = faPlus;
  isMenuCollapsed = true;
  links = [
    { title: 'Movies', fragment: '/' },
    { title: 'People', fragment: '/people' }
  ];


  ngOnInit(): void {
  }

  openAddRecordModal() {
    // this.modalService.open();
  }

  openAddPeopleModal() {
    // this.modalService.open();
  }

  searchPeople(search_text){
    this.router.navigate(['/people'], {queryParams: {search: search_text}})
  }
}
