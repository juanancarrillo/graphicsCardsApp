import { GraphicCardState } from '../../shared/models/graphicCard.state';
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectItemsFeature = (state: AppState) => state.graphics;

export const selectListGraphics = createSelector(
    selectItemsFeature,
    (state: GraphicCardState) => state.graphics
);

export const selectLoading = createSelector(
    selectItemsFeature,
    (state: GraphicCardState) => state.loading
);