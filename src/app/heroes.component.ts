import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import '../assets/css/styles.css';

 import {Hero} from './hero';
 import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
    constructor(private heroService: HeroService,private router:Router) { };
   title = "test";
   heroes:Hero[];
   selectedHero:Hero ;
   onSelect(hero: Hero): void {
       this.selectedHero = hero;
   }
   getHeroes():void{
       this.heroService.getHeroes().then(data  => this.heroes = data);
   }
   ngOnInit(): void {
    this.getHeroes();
  }
  gotoDetail():void{
     this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
