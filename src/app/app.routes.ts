import { Routes } from '@angular/router';

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
        path: 'admin',
        loadComponent: () => import('../components/admin/admin').then(m => m.Admin),
    },
    {
        path: 'cart',
        loadComponent: () => import('../components/cart/cart').then(m => m.Cart)
    }
];
