import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((m)=> m.HomePage),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'register',
        loadComponent: () => import('./components/register/register.component').then((m)=> m.RegisterComponent)
    },
    {
        path: 'map',
        loadComponent: () => import('./components/map/map.component').then((m)=> m.MapComponent)
    }


]