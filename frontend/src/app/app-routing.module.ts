import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { GameSavedComponent } from './game-saved/game-saved.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'explore', component: ExploreComponent  },
  { path: 'game', component: GameComponent },
  { path: 'game/:id', component: GameSavedComponent },
  { path: '**', redirectTo: ''  }, // catchall
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
