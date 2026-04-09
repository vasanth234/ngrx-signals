import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private http: HttpClient) {}

  id = signal('0');

  onDo() {
    const userId = this.id();

    if (userId === '0') {
      console.log('User not found');
      return;
    }

    this.http
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .pipe(
        catchError(error => {
          return throwError(() => new Error('User not found'));
        })
      )
      .subscribe({
        next: res => {
          console.log(res);
        },
        error: err => {
          console.log(err.message);
        }
      });
  }
}