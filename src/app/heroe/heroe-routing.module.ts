import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {AllHeroesComponent} from "./components/all-heroes/all-heroes.component";
import { HeroeComponent } from './components/heroe/heroe.component';
import { UpdateHeroeComponent } from './components/update-heroe/update-heroe.component';
import { DeleteHeroeComponent } from './components/delete-heroe/delete-heroe.component';
const routes: Routes = [
  { path:'heroes' , component: AllHeroesComponent},
  { path:'heroe' , component: HeroeComponent},
  { path:'update-heroe' , component: UpdateHeroeComponent},
  { path:'delete-heroe' , component: DeleteHeroeComponent},
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class HeroeRoutingModule { }