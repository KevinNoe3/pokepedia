import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroPokePage } from './registro-poke.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroPokePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroPokePageRoutingModule {}
