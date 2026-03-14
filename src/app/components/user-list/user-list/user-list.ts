import { Component, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserActions from '../../../store/user.action';
import { AppState } from '../../../app.state';
import { UserCard } from '../../user-card/user-card/user-card';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-list',
  imports: [UserCard,CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {

    private store = inject(Store<AppState>); // ✅ FIX

  selectedUser = signal<string>('');

  users$ = this.store.select(state => state.users.users);

  constructor() {
    this.store.dispatch(UserActions.loadUsers());
  }

  onUserSelected(name: string) {
    this.selectedUser.set(name);
  }

  onUserDelete(id:any){
     this.store.dispatch(UserActions.DeleteUsers({id}))
  }

}
