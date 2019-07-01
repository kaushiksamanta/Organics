import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { AppService } from '../../app.service';
import {
  LOAD_TUTORIAL,
  LoadTutorial,
  LoadTutorialSuccess,
} from '../actions/tutorial.action';

@Injectable()
export class TutorialEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType<LoadTutorial>(LOAD_TUTORIAL),
      mergeMap(() =>
        this.appService.getTutorials().pipe(
          map(tutorials => new LoadTutorialSuccess(tutorials)),
          catchError(() => {
            return EMPTY;
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private appService: AppService) {}
}
