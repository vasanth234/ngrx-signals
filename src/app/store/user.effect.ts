import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../services/user';
import * as UserActions from './user.action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private userService = inject(UserService);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map(users => UserActions.loadUsersSuccess({ users }))
        )
      )
    )
  );
deleteUser$ = createEffect(() =>
  this.actions$.pipe(
    ofType(UserActions.DeleteUsers),
    mergeMap(action =>
      this.userService.deleteUser(action.id).pipe(
        map(() => UserActions.deleteUserSuccess({ id: action.id })),
        catchError(err =>
          of(UserActions.deleteUserFailure({ error: err.message }))
        )
      )
    )
  )
);


}
