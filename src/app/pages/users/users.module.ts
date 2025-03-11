import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {UserListComponent} from './user-list/user-list.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';


@NgModule({
  declarations: [
    UserListComponent,
    ListCategorieComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
