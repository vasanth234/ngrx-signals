import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user.model';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
 

  constructor(private http: HttpClient) {}

  getUser(id: number) {

    // manually create error
    if (id <= 0) {
      return throwError(() => new Error('Invalid user id'));
    }

    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`).pipe(

      // catch API error
      catchError(error => {
        console.log('API Error:', error);

        return throwError(() => new Error('User not found'));
      })

    );
  }
}
