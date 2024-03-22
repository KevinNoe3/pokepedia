import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  correoIngresado: string = '';

  pokemones:any[] =[];
  route: any;
  

  constructor(private pokeapi: PokeapiService, private router: Router) {}

  ngOnInit(): void {
    const correoParam = this.route.snapshot.paraMap.get('email');
    this.correoIngresado = correoParam ? correoParam : '';
  }

  async accion() {
    let results = await this.pokeapi.getPokemones();

    this.pokemones = [...this.pokemones, ...results.results];

  
    while (results.next) {
      results = await this.pokeapi.getPokemones(results.next);
      this.pokemones = [...this.pokemones, ...results.results];
    }

    console.log('Lista de Pokémon:', this.pokemones);
  }
  getNombreEntrenador() {
    throw new Error('Method not implemented.');
  }

  datos:any[]=[];

  loadData(event:any) {
    setTimeout (() => {
      for(let i = 0; i < 10; i++) {
        this.datos.push({ /* datos */ });
      }

      event.target.complete();

    },500);
  }

}
