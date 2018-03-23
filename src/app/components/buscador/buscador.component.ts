import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router'; //Importacion necesaria para funcion verHeroe()

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  heroes:any[] = []
  heroes2:Heroe[] = [];
  termino:string
  constructor(private activatedRoute:ActivatedRoute, private heroesService:HeroesService, private _Router:Router) { }

  ngOnInit() {
    this.heroes2 = this.heroesService.getHeroes();
    this.activatedRoute.params.subscribe(params =>{
    this.termino = params['termino'];
    this.heroes = this.heroesService.buscarHeroes(params ['termino']);
    console.log(this.heroes);
    })
  }

  verHeroe( index:number ){
    this._Router.navigate(['/heroe', index]);
  }
}
