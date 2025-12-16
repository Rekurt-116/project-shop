import { Component, inject } from "@angular/core";
import { Router, RouterLink, RouterOutlet, RouterLinkActive } from "@angular/router";
import { Auth } from "../../core/services/auth/auth";

@Component({
  standalone: true,
  selector: 'app-admin-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.scss'
})
export class AdminLayoutComponent {
  private authService = inject(Auth);
  private router = inject(Router);
  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}