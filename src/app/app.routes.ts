import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('../components/home/home').then(m => m.Home)
    },
    {
        path: 'catalog',
        loadComponent: () => import('../components/catalog/catalog').then(m => m.Catalog)
    },
    {
        path: 'cart',
        loadComponent: () => import('../components/cart/cart').then(m => m.Cart)
    },
    {
        path: 'admin',
        loadComponent: () => import('../components/admin/admin').then(m => m.Admin), canActivate: [authGuard]
    }
];
