import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphicCardListRoutingModule } from './graphic-card-list-routing.module';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    GraphicCardListRoutingModule,
    SpinnerModule
  ]
})
export class GraphicCardListModule { }
