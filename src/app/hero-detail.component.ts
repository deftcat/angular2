import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './hero';
import {HeroService} from './hero.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl:'./hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit{

  @Input() hero: Hero;
  ngOnInit(){
    // this.route.params.
    // switchMap((params : Params)=>this.heroService.getHeroes(+params['id']))
    // .subscribe(hero =>{ this.hero = hero});
      this.route.params
    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    .subscribe(hero => this.hero = hero);
  };
  constructor(
    private heroService : HeroService,
    private location : Location,
    private route : ActivatedRoute,
    ){};
    goBack():void{
    this.location.back();
  }
}
