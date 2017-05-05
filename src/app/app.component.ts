import {Component} from '@angular/core';
// import {HeroService} from './hero.service';
@Component ({
	selector : 'app-root',
	template:`<h1>{{title}}</h1>
	<my-heroes></my-heroes>`,
		
})

export class AppComponent{
  title = 'Tour of Heroes';
}