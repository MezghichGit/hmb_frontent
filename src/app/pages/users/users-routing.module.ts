import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SidebarComponent} from '../../layout/sidebar/sidebar.component';
import {UserListComponent} from './user-list/user-list.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';

const routes: Routes = [
  {
    path: '', component: SidebarComponent,
    children: [
      {path: 'users', component: UserListComponent},
      {path: 'categories', component:ListCategorieComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
