import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-info-poke',
  templateUrl: './info-poke.page.html',
  styleUrls: ['./info-poke.page.scss'],
})
export class InfoPokePage implements OnInit {
pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private httpService: PokeapiService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get(`id`);
    if (id !==null){
      this.httpService.getPokemonDetails(+id).subscribe(data =>{
        this.pokemon = data;
      });
    }
  }

  

  traducirNombre(nombre: string): string {
    switch (nombre) {
      case 'type': return 'tipo';
      case 'hp': return 'vida';
      case 'attack': return 'ataque';
      case 'defense': return 'defensa';
      case 'special-attack': return 'ataque especial';
      case 'special-defense': return 'defensa especial';
      case 'speed': return 'velocidad';
      default: return nombre;
    }
  }

}
