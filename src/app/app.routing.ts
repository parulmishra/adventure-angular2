import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterCreationComponent } from './character-creation/character-creation.component';
import {IntroductionComponent} from './introduction/introduction.component';
import { EatComponent } from './eat/eat.component';
import { LeaveComponent } from './leave/leave.component';
const appRoutes: Routes = [
  {
    path: '',
    component: CharacterCreationComponent
  },
  {
    path:'introduction',
    component: IntroductionComponent
  },
  {
    path:'introduction/eat',
    component: EatComponent
  },
  {
    path:'introduction/leave',
    component: LeaveComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
