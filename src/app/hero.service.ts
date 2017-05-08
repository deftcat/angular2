import {Injectable} from '@angular/core';
import {Hero} from './hero';
// import {HEROES} from './mock-hero';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable() export class HeroService{
	private heroUrl = 'api/heroes';
	constructor(private http : Http){};
	getHeroes():Promise<Hero[]>{
		// return Promise.resolve(HEROES);
		return this.http.get(this.heroUrl)
				.toPromise()
				.then(response => response.json().data as Hero[])
				.catch(this.handleError);
	}
	handleError(error: any):Promise<any>{
		console.log('an error' , error);
		return Promise.reject(error.message || error);
	}
	getHeroesSlowly():Promise<Hero[]>{
		return new Promise(resolve => {
			setTimeout(()=>{resolve(this.getHeroes()), 100000000000});
		});
	}
	getHero(id : number):Promise<Hero>{
		// hero[] : Hero[] = this.getHeroes().then();
		// return hero;
		// return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
		const url = `${this.heroUrl}/${id}`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json().data as Hero)
			.catch(this.handleError);
	}

}