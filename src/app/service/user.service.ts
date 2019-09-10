import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import {User} from '../models/users.model';
import {Store} from '@ngrx/store';
import * as indexReducer from '../store/reducers';
import {SetUserItem} from '../store/actions/user.action';
import {FilterItemModel, FilterModel} from '../models/filter.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userFilter: FilterModel;

  userFilterNames: string[];

  constructor(private http: HttpClient,
              private store: Store<indexReducer.State>,
  ) {
    this.userFilterNames =  ['gender', 'city', 'street', 'email', 'phone'];
  }

  getUser() {
    this.http.get(`/?results=100&seed=foobar`).subscribe( (res: any) => {
      let users = new Array<User>();
      res.results.map((item, index) => {
        users.push(new User(
          index,
          `${item.name.first} ${item.name.last}`,
          item.dob.age,
          item.gender,
          item.picture.medium,
          item.phone,
          item.location.city,
          item.location.street,
          item.email
        ));
      });
      this.store.dispatch(new SetUserItem(users));
    }, error => {

    });
  }

  initUserFilter() {
    this.userFilter = new FilterModel();
    if (localStorage.getItem('user-filter')) {
      this.userFilter = JSON.parse(localStorage.getItem('user-filter'));
    } else {
      this.userFilterNames.forEach((item, index) => {
        this.userFilter.filter.push(new FilterItemModel(index, item, false));
      });
    }
  }

  filter(filter: any) {
    let filteredUsers: User[];

    this.store.select(state => state.user.users).subscribe(state => {
      if (state) {
        filteredUsers = state;
      }
    });

    this.userFilter.filter.forEach(item => {
      if (item.value) {
        switch (item.name) {
          case 'gender': {
            filteredUsers = filteredUsers.filter(x => x.gender === filter.gender);
            break;
          }
          case 'city': {
            filteredUsers = filteredUsers.filter(x => x.city === filter.city);
            break;
          }
          case 'street': {
            filteredUsers = filteredUsers.filter(x => x.street === filter.street);
            break;
          }
          case 'email': {
            filteredUsers = filteredUsers.filter(x => x.email === filter.email);
            break;
          }
          case 'phone': {
            filteredUsers = filteredUsers.filter(x => x.phone === filter.phone);
            break;
          }
        }
      }
    });
    return filteredUsers;
  }

  clearFilter() {
    let filteredUsers: User[];
    this.store.select(state => state.user.users).subscribe(state => {
      if (state) {
        filteredUsers = state;
      }
    });
    return filteredUsers;
  }
}
