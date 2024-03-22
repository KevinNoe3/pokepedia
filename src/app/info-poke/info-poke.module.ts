import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPokePageRoutingModule } from './info-poke-routing.module';

import { InfoPokePage } from './info-poke.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPokePageRoutingModule
  ],
  declarations: [InfoPokePage]
})
export class InfoPokePageModule {}
