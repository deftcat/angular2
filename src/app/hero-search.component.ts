import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import {Hero} from './hero';
import {HeroSearchService} from './hero-search.service';
import {Router} from '@angular/router';

// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
@Component({
	selector : 'hero-search',
	templateUrl:'hero-search.component.html',
	styleUrls : ['hero-search.component.css'],
	providers :[ HeroSearchService]
})


export class HeroSearchComponent implements OnInit{
	heroes : Observable<Hero[]>;
	private searchTerms = new Subject<string>();
	ngOnInit(): void {
		this.heroes = this.searchTerms
			.debounceTime(30)        // wait 300ms after each keystroke before considering the term
			.distinctUntilChanged()   // ignore if next search term is same as previous
			.switchMap(term => term   // switch to new observable each time the term changes
			// return the http search observable
			? this.heroSearchService.search(term)
			// or the observable of empty heroes if there was no search term
			: Observable.of<Hero[]>([]))
			.catch(error => {
			// TODO: add real error handling
			console.log(error);
			return Observable.of<Hero[]>([]);
			});
}
	constructor(
		private heroSearchService : HeroSearchService,
		private router:Router ){}
	search(term : string){
		this.searchTerms.next(term);
	}
	gotoDetail(hero : Hero):void{
		let link = ['./detail',hero.id];
		this.router.navigate(link);
	}
}