import { Routes } from '@angular/router';
import { ResourceApiComponent } from './resource-api/resource-api.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'resource-api',
        pathMatch: 'full'
    },
    {
        path: 'resource-api',
        component: ResourceApiComponent
    }
];
