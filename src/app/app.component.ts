import {Component} from '@angular/core';
// import {HeroService} from './hero.service';
@Component ({
	selector : 'app-root',
	template:`<h1>{{title}}</h1>
	<nav>
		<a routerLink='/heroes'>Heroes</a>
	<a routerLink='/dashboard'>DashBoard</a>
	</nav>
	<router-outlet></router-outlet>`,

})

export class AppComponent{
  title = 'Tour of Heroes';
}