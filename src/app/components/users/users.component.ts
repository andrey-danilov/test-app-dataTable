import { Component, OnInit } from '@angular/core';
import {User} from '../../models/users.model';
import {UserService} from '../../service/user.service';
import {Store} from '@ngrx/store';
import * as indexReducer from '../../store/reducers';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];
  tasksDataSourceStorage: any;
  constructor(private userService: UserService,
              private store: Store<indexReducer.State>) { }

  ngOnInit() {
    this.users = new Array<User>();
    this.tasksDataSourceStorage = [];
    this.userService.getUser();
    this.store.select(state => state.user.users).subscribe(users => {
      if (users) {
        this.users = users;
      }
    });
  }

  changeUserList(users) {
    console.log(users);
    this.users = users;
  }




}
