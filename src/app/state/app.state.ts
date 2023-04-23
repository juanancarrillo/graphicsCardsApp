import { GraphicCardState } from '../shared/models/graphicCard.state';
import { ActionReducerMap } from "@ngrx/store";
import { graphicsReducer } from "./reducers/graphics.reducers";

export interface AppState {
    graphics: GraphicCardState;
}

export const ROOT_REDUCERS = {
    graphics: graphicsReducer
}