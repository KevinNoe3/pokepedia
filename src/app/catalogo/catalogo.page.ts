import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  public pokemons: any[] = [];
  public pokemonsFiltrados: any[] = [];

  likes: boolean[] = JSON.parse(localStorage.getItem('likes') || '[]') || new Array(this.pokemons.length).fill(false);

  constructor(
    private httpService: PokeapiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPokemons()
  }

  getPokemons(){
    this.httpService.getPokemon().subscribe((data: any) => {
      //const limite = 10;
      this.pokemons = data.results;
      this.pokemons.forEach((pokemon: any, index) => {
        this.httpService.getPokemonDetails(index + 1).subscribe((details: any) => {
          pokemon.sprites = details.sprites;
          pokemon.name = details.name;
        });
      });
    });
  }

  buscarPokemon(event: any){
    const searchTerm = event.detail.value.toLowerCase();
    this.pokemonsFiltrados = this.pokemons.filter(pokemon => 
      pokemon.name.toLowerCase().includes(searchTerm)
      );
  }

  showPokemon(id: number) {
    this.httpService.getPokemonDetails(id).subscribe(data => {
      console.log('Detalles del Pokémon: ', data);
      this.router.navigate(['/info-poke', id]);
    });
  }

}
