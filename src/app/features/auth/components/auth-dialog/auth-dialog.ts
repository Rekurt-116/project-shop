import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogClose } from "@angular/material/dialog";

@Component({
  selector: 'app-auth-dialog',
  imports: [MatButtonModule],
  templateUrl: './auth-dialog.html',
  styleUrl: './auth-dialog.scss'
})
export class AuthDialog {

}
