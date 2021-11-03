//System import
import { Component, OnInit } from '@angular/core';

//Custom import
import { Hero } from './../objects/hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes?: Hero[];

  //tempHero = new Hero(1,'SuperMan');
  //hero : Hero = {_id: 1, _name: 'WinterMan'};//use this if the field is public

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
