import { Injectable } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Observable, of, throwError } from 'rxjs';
import { Hero } from '../model/hero';
import { HEROES } from '../model/mock-heroes';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable< Hero[]> {
    const heroes = of(HEROES);

    return heroes;
  }
}
