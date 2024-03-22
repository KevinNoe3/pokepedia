import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPokePageRoutingModule } from './registro-poke-routing.module';

import { RegistroPokePage } from './registro-poke.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPokePageRoutingModule
  ],
  declarations: [RegistroPokePage]
})
export class RegistroPokePageModule {}
