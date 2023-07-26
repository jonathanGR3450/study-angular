import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/admin/admin.module').then(x => x.AdminModule) },
  { path: "battle", loadChildren: () => import('./modules/battle/battle.module').then(x => x.BattleModule) },
  { path: "search", loadChildren: () => import('./modules/search/search.module').then(x => x.SearchModule) },
  { path: '**', redirectTo: 'battle' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
