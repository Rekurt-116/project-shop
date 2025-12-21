import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {User} from '../../../../../shared/models/interfaces/user/user.interface';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
  standalone: true
})
export class UserCard {
@Input() user!: User;

  onAvatarError(event: Event) {
    (event.target as HTMLImageElement).src = '/assets/images/avatar-placeholder.jpg'
  }
}
