import { GraphicCard } from '../../shared/interfaces/graphicCard.interface';
import { createAction, props } from '@ngrx/store';


export const loadGraphics = createAction(
    '[GraphicCard List] Load graphics'
);

export const loadedGraphics = createAction(
    '[GraphicCard List] Loaded success',
    props<{ graphics: GraphicCard[] }>()
)

export const loadedGraphic = createAction(
    '[GraphicCard] Loaded success',
    props<{ graphics: GraphicCard[] }>()
)