import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GraphicCardListComponent } from '../graphicCard/graphic-card-list/graphic-card-list.component';
import { GraphicCardComponent } from '../graphicCard/graphic-card.component';
import { GraphicCardDetailsComponent } from './graphic-card-details/graphic-card-details.component';

const myComponents = [
  GraphicCardListComponent,
  GraphicCardDetailsComponent,
  GraphicCardComponent
];


@NgModule({
  declarations: [...myComponents],
  imports: [CommonModule, RouterModule],
  exports: [...myComponents],
})
export class GraphicCardModule { }
