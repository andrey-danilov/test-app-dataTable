import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../../service/user.service';
import {FilterModel} from '../../models/filter.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.scss']
})
export class FilterComponentComponent implements OnInit {


  @Output() searchedUsers = new EventEmitter();

  filterForm: FormGroup;
  isClearFilter: boolean;
  userFilter: FilterModel;
  constructor(private userService: UserService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.isClearFilter = false;
    this.userFilter = this.userService.userFilter;
    this.filterForm = this.formBuilder.group({
      gender: [this.userFilter.filter[0].filterValue ? this.userFilter.filter[0].filterValue : 'male'],
      city: [this.userFilter.filter[0].filterValue ? this.userFilter.filter[0].filterValue : ''],
      street: [this.userFilter.filter[0].filterValue ? this.userFilter.filter[0].filterValue : ''],
      email: [this.userFilter.filter[0].filterValue ? this.userFilter.filter[0].filterValue : '', [Validators.email]],
      phone: [this.userFilter.filter[0].filterValue ? this.userFilter.filter[0].filterValue : '']
    });
  }


  changeFilter() {
    localStorage.setItem('user-filter', JSON.stringify(this.userFilter));
  }


  searchUsers() {
    this.searchedUsers.emit(this.userService.filter(this.filterForm.value));
    this.isClearFilter = true;
  }

  clearFilter() {
    this.searchedUsers.emit(this.userService.clearFilter());
    this.isClearFilter = false;
  }

}
