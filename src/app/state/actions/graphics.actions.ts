import { GraphicCard } from '../../shared/interfaces/graphicCard.interface';
import { createAction, props } from '@ngrx/store';


export const loadGraphics = createAction(
    '[GraphicCard List] Load graphics',
    props<{ 
        name: string,
        cards: number 
    }>()
);

export const loadedGraphics = createAction(
    '[GraphicCard List] Loaded success',
    props<{ 
        graphics: GraphicCard[]
    }>()
)