import { Routes } from '@angular/router';
import { Login } from './features/login/login';
import { ProductsList } from './features/products/components/products-list/products-list';
import { Home } from './features/home/home';
import { MainLayout } from './layout/main-layout/main-layout';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout';
import { AdminDashboard } from './features/admin/components/admin-dashboard/admin-dashboard';
import { Users } from './features/admin/components/users/users';
import { Products } from './features/admin/components/products/products';
import { authGuard } from './core/guards/auth-guard';
import {ProductDetail} from './features/products/components/product-detail/product-detail';
import { Orders } from './features/orders/orders-component/orders';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home },
      { path: 'login', component: Login },
      { path: 'products', component: ProductsList },
      { path: 'products/:id', component: ProductDetail},
      { path: 'orders', component: Orders },
    ],
  },
  {
    path: 'admin',
    canActivate: [authGuard],
    component: AdminLayoutComponent,
    children: [
      { path: '', component: AdminDashboard },
      { path: 'users', component: Users },
      { path: 'products', component: Products },
    ],
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login').then((m) => m.Login),
  },
];
