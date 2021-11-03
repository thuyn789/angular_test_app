import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HEROES } from './objects/hero-mock';
import { Hero } from './objects/hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroServices: Fetched Heroes');
    return of(HEROES);
  }
}
