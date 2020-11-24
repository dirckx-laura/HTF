import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponentComponent } from './game-component/game-component.component';

const routes: Routes = [
  { path: "", redirectTo: "/game-component", pathMatch: "full" },
  { path: "game-component", component: GameComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
