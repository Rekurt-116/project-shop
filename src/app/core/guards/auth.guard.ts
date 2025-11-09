import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

import { map, tap } from "rxjs";
import { UserService } from "../services/user/user.service";

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  return userService.user$.pipe(
    tap(user => console.log('user in guard:', user)),
    map(user => {
      if (user?.isAdmin) {
        return true;
      } else {
        router.navigate(['']);
        return false;
      }
    })
  );
};