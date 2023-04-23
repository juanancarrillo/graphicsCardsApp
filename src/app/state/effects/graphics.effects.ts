import { GraphicCardService } from '../../shared/services/graphic-card.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { loadGraphics } from '../actions/graphics.actions';

@Injectable()
export class GraphicsEffects {

    loadGraphics$ = createEffect(() => this.actions$.pipe(
        ofType(loadGraphics),
        mergeMap((action) => this.graphicCardService.getGraphicCardList(action.name, action.cards)
            .pipe(
                map(graphics => ({ type: '[GraphicCard List] Loaded success', graphics })),
                catchError(() => EMPTY)
            ))
    )
    );

    constructor(
        private actions$: Actions,
        private graphicCardService: GraphicCardService
    ) { }
}