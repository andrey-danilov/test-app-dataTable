import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {SomePageComponent} from './components/some-page/some-page.component';


const routes: Routes = [
  { path: '',
  component: UsersComponent
  },
  { path: 'somePage',
  component: SomePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
