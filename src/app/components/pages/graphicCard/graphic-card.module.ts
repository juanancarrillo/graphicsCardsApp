import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { GraphicCardListComponent } from '../graphicCard/graphic-card-list/graphic-card-list.component';
import { GraphicCardComponent } from '../graphicCard/graphic-card.component';
import { GraphicCardDetailsComponent } from './graphic-card-details/graphic-card-details.component';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';

const myComponents = [
  GraphicCardListComponent,
  GraphicCardDetailsComponent,
  GraphicCardComponent
];


@NgModule({
  declarations: [...myComponents],
  imports: [CommonModule, RouterModule, SpinnerModule, InfiniteScrollModule],
  exports: [...myComponents],
})
export class GraphicCardModule { }
