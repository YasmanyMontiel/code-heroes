import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'' , loadChildren: () => import('./heroe/heroe.module').then(m => m.HeroeModule)},
  {path: '' , redirectTo: '/' , pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
