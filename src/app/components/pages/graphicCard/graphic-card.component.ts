import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { GraphicCard } from '../../../shared/interfaces/graphicCard.interface';


@Component({
    selector:'app-graphic-card',
    template:`
    <div class="card">
      <div class="image">
        <a [routerLink]="['/graphic-card-details', graphicCard.id]">
          <img
            [src]="graphicCard.image"
            [alt]="graphicCard.name"
            class="card-img-top"
          />
        </a>
      </div>

      <div class="card-inner">
      <div class="header">
      <a [routerLink]="['/graphic-card-details', graphicCard.id]">
            <h2>{{ graphicCard.model | slice: 0:15}}</h2>
          </a>
          <p>{{ graphicCard.manufacturer }}</p>
          <p>{{ graphicCard.price }}</p>
          <div>
        </div>
      </div>
    </div>`,
    changeDetection:ChangeDetectionStrategy.OnPush
})

export class GraphicCardComponent{
    @Input() graphicCard:GraphicCard;
}
