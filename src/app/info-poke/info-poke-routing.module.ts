import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPokePage } from './info-poke.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPokePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPokePageRoutingModule {}
