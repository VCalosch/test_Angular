import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';

import { Router } from '@angular/router'; //Importacion necesaria para funcion verHeroe()


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];


  constructor(private _HeroesService:HeroesService, private _Router:Router) { }

  ngOnInit() {

    this.heroes = this._HeroesService.getHeroes();
    console.log(this.heroes);

  }

  verHeroe( index:number ){
    this._Router.navigate(['/heroe', index]);
  }
}
