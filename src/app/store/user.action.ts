import { createAction, props } from '@ngrx/store';
import { User } from '../user.model';

export const loadUsers = createAction('[User] Load Users');

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: string }>()
);

export const DeleteUsers = createAction(
  '[User] Delete users',
  props<{id : number }>()
);

export const deleteUserSuccess = createAction(
  '[User] Delete User Success',
  props<{ id: number }>()   // action dispatched after API deletes successfully
);

export const deleteUserFailure = createAction(
  '[User] Delete User Failure',
  props<{ error: string }>()  // action dispatched if API fails
);




