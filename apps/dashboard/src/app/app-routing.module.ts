import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@workshop/ui-login';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule'}, // Default Route
  { path: 'projects', loadChildren: './projects/projects.module#ProjectModule'},
  { path: 'customers', loadChildren: './customers/customers.module#CustomersModule'},
  { path: 'login', component: LoginComponent},
  // { path: '**', redirectTo: '', pathMatch: 'full'} // Wildcard ** For a Route that doesn't exist, redirect to root
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }