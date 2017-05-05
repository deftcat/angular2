import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-hero';
@Injectable() export class HeroService{
	getHeroes():Promise<Hero[]>{
		return Promise.resolve(HEROES);
	}
	getHeroesSlowly():Promise<Hero[]>{
		return new Promise(resolve => {
			setTimeout(()=>{resolve(this.getHeroes()), 100000000000});
		});
	}
	getHero(id : number):Promise<Hero>{
		// hero[] : Hero[] = this.getHeroes().then();
		// return hero;
		return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
	}

}