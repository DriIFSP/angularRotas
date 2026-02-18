import { Routes } from '@angular/router';
import { Poema1 } from './poema1/poema1';
import { Poema2 } from './poema2/poema2';


export const routes: Routes = [
    { path: 'poema1', component: Poema1 },
    { path: 'poema2', component: Poema2 },
    { path: '', redirectTo: 'poema1', pathMatch: 'full' },
    { path: '**', redirectTo: 'poema1' }
];
