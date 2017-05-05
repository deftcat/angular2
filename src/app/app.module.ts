import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroService } from './hero.service';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{
      path : 'heroes',
      component : HeroesComponent,
    },{
      path : 'dashboard',
      component: DashboardComponent,
    },{
      redirectTo:'/dashboard',
      pathMatch: 'full',
      path : '',
    }

    ]),

  ],
  providers : [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
