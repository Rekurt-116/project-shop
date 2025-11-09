import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';


export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/home/home').then(m => m.Home)
    },
    {
        path: 'catalog',
        loadComponent: () => import('./features/catalog/components/catalog/catalog').then(m => m.Catalog)
    },
    {
        path: 'cart',
        loadComponent: () => import('./features/cart/components/cart/cart').then(m => m.Cart)
    },
    {
        path: 'admin',
        loadComponent: () => import('./features/admin/components/admin/admin').then(m => m.Admin), canActivate: [authGuard]
    }
];
