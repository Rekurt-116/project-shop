import {ChangeDetectorRef, Component, inject, Input, OnInit} from '@angular/core';
import {SearchInput} from '../../../../shared/search-input/search-input';
import {User} from '../../../../shared/models/interfaces/user/user.interface';
import {UsersApiService} from '../../../../core/services/user/users-api.service';
import {debounceTime, distinctUntilChanged, startWith, Subject, switchMap} from 'rxjs';
import {UserCard} from './user-card/user-card';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [
    SearchInput,
    UserCard,
  ],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users implements OnInit {
  readonly usersApiService = inject(UsersApiService);
  private search$ = new Subject<string>();
  readonly cd = inject(ChangeDetectorRef);


  @Input() user!: User;

  public users: User[] = [];

  ngOnInit() {
    this.loadUsers();

    this.search$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(qwery => this.usersApiService.getUsers(qwery))
    ).subscribe(users => {
      this.users = users;
      this.cd.markForCheck()
    })
  }

  loadUsers() {
    this.usersApiService.getUsers().subscribe(
      users => {
        this.users = users;
        this.cd.markForCheck()
      }
    );
  }

  onSearch(qwery: string) {
    this.search$.next(qwery);
  }
}
