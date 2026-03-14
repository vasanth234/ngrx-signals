import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../user.model';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
   @Input() user!: User;
  @Output() selectUser = new EventEmitter<string>();
  @Output() deleteUser = new EventEmitter<any>();

  select() {
    this.selectUser.emit(this.user.name);
  }

  delete(){
    this.deleteUser.emit(this.user.id);
  }

}
