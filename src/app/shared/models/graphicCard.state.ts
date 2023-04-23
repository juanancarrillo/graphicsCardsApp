import { GraphicCard } from "../interfaces/graphicCard.interface";

export interface GraphicCardState {
    loading: boolean,
    graphics: ReadonlyArray<GraphicCard>;
}