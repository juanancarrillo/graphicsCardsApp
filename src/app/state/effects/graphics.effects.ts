import { GraphicCardService } from '../../shared/services/graphic-card.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects'; //TODO <---
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class GraphicsEffects {

    loadGraphics$ = createEffect(() => this.actions$.pipe(
        ofType('[GraphicCard List] Load graphics'),
        mergeMap(() => this.graphicCardService.getGraphicCardList()
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