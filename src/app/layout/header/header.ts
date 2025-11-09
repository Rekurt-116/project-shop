import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../core/services/user/user.service';
import { MatDialog } from '@angular/material/dialog';
import { AuthDialog } from '../../features/auth/components/auth-dialog/auth-dialog';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgIf, AsyncPipe],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
  readonly userService = inject(UserService);
  
  user$ = this.userService.user$;

  readonly dialog: MatDialog = inject(MatDialog);

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(AuthDialog);

    dialogRef.afterClosed().subscribe((result: string) => {
      if(result === 'admin') {
        this.userService.loginAsAdmin()
      } else if ( result === 'user') {
        this.userService.loginAsUser()
      } else {
        return undefined
      }
    })
  }

  public logOut() {
    if(confirm('Вы точно хотите выйти?')) {
      return this.userService.logOut()
    } else {
      return false
    }
  }
}

