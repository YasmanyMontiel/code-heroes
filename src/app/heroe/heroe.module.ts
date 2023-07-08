import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllHeroesComponent } from './components/all-heroes/all-heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { DeleteHeroeComponent } from './components/delete-heroe/delete-heroe.component';
import { UpdateHeroeComponent } from './components/update-heroe/update-heroe.component';
import { HeroeRoutingModule } from './heroe-routing.module';



@NgModule({
  declarations: [
    AllHeroesComponent,
    HeroeComponent,
    DeleteHeroeComponent,
    UpdateHeroeComponent
  ],
  imports: [
    CommonModule,
    HeroeRoutingModule
  ]
})
export class HeroeModule { }
