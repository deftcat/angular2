import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Hero} from './Hero';
import   'rxjs/add/operator/map';

import {Observable} from 'rxjs/Observable';

@Injectable() export class HeroSearchService {
	
	constructor(private http : Http) {}
	search(term:string): Observable<Hero[]>{
		const url = `app/heroes/?name=${term}`;
		return this.http
			.get(url)
			.map(response => response.json().data as Hero[]);
	}
}
