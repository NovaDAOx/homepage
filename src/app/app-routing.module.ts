import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'index', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./index/index.module').then((m) => m.IndexModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
