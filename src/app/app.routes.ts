import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';

const app_routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path:'detail', component:DetailComponent },
    { path: '**', pathMatch: 'full',  redirectTo: 'login'},
];

export const app_routing = RouterModule.forRoot(app_routes)
