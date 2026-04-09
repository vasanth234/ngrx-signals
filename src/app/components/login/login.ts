import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  email = signal('');
  password = signal('');
  isLoading = signal(false);

  onSubmit() {
    if (this.email() && this.password()) {
      this.isLoading.set(true);
      console.log('Login attempt:', {
        email: this.email(),
        password: '***'
      });
      // TODO: Call your login service/action here
      this.isLoading.set(false);
    }
  }
}
