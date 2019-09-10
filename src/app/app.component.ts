import { Component } from '@angular/core';
import {FilterItemModel, FilterModel} from './models/filter.model';
import {UserService} from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app-dataTable';


  constructor(private userService: UserService) {
    userService.initUserFilter();
  }



}
