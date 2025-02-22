import { Routes } from '@angular/router';
import { NavbarLayoutComponent } from './layouts/navbar-layout/navbar-layout';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'home'
    },
    {
        path:'home',
        component:NavbarLayoutComponent,
        children:[
            {
                path:'',
                loadChildren:() => import('./pages/home/home.routes').then(r => r.homeRoutes)
            }
        ]
    },
    {
        path:'explorer',
        component:NavbarLayoutComponent,
        children:[
            {
                path:'',
                loadChildren: () => import('./pages/explorer/explorer.routes').then(r =>r.explorerRoutes)
            }
        ]
    },
    {
        path:'notification',
        component:NavbarLayoutComponent,
        children:[
            {
                path:'',
                loadChildren: () => import('./pages/notification/notification.routes').then(r => r.notificationRoutes)
            }
        ]
    }
];
