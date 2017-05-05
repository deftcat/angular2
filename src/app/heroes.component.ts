import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import {HeroService} from './hero.service';
import {Router} from '@angular/router'
 
@Component({
  selector: 'my-heroes',
  template: `
    
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <div *ngIf='selectedHero'>
    	<h2>{{selectedHero.name}}</h2>
		<button (click)='gotoDetail()'>See detail</button>
    </div>
  `,
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
  	this.heroService.getHeroes().then(heroes=>{this.heroes = heroes; console.log('trigge');});
  }
  gotoDetail():void{
  	this.router.navigate(['./detail', this.selectedHero.id]);
  }
}
