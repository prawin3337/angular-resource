import { Routes } from '@angular/router';
import { ResourceApiComponent } from './resource-api/resource-api.component';
import { HttpResourceApiComponent } from './http-resource-api/http-resource-api.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'http-resource-api',
        pathMatch: 'full'
    },
    {
        path: 'resource-api',
        component: ResourceApiComponent
    },
    {
        path: 'http-resource-api',
        component: HttpResourceApiComponent
    }
];
