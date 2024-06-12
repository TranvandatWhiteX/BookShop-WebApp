import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: '**', component: PageNotFoundComponent }
];

export const AppRoutingModule: ModuleWithProviders<any> = RouterModule.forRoot(routes);
