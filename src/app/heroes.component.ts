import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import {HeroService} from './hero.service';
import {Router} from '@angular/router'
 
@Component({
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls:['heroes.component.css'] ,
  // providers : [HeroService],
})
export class HeroesComponent implements OnInit{

  ngOnInit(){

  	this.getHeroes();
  }
  // heroes = HEROES;
  constructor(private heroService : HeroService
  	, private router : Router){};
  heroes : Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes():void{
  	  	
  	// this.heroes = this.heroService.getHeroes();
  	this.heroService.getHeroes().then(heroes=>{this.heroes = heroes});
  }
  gotoDetail():void{
  	this.router.navigate(['./detail', this.selectedHero.id]);
  }
}
