import { loadedGraphics } from './../actions/graphics.actions';
import { GraphicCardState } from '../../shared/models/graphicCard.state';
import { createReducer, on } from '@ngrx/store';
import { loadGraphics } from '../actions/graphics.actions';

export const initialState: GraphicCardState = { loading: false, graphics: [] }

export const graphicsReducer = createReducer(
    initialState,
    on(loadGraphics, (state) => {
        return { ...state, loading: true }
    }),
    on(loadedGraphics, (state, { graphics }) => {
        return { ...state, loading: false, graphics }
    })
);