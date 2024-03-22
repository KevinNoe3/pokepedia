import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  getPokemon(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1025');
  }

  constructor(private http: HttpClient) {}

  getPokemones(url?: string): Promise<any> {
    const apiUrl = url || 'https://pokeapi.co/api/v2/pokemon';
    return this.http.get(apiUrl).toPromise();
  }

  
  async peticionesHttp(){
    let observable = this.http.get('https://pokeapi.co/api/v2/pokemon')
    .subscribe(data => { console.log(data); })
    .unsubscribe();

    let promise = await this.http.get('https://pokeapi.co/api/v2/pokemon')
  .toPromise();

  console.log('DATA', promise);

  //Obserable
  //Promise
  }

  getPokemonDetails(id:number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
