import { DOCUMENT } from '@angular/common';
import {
  Component, HostListener, Inject, OnInit,
} from '@angular/core';
import {
  ActivatedRoute, NavigationEnd, ParamMap, Router,
} from '@angular/router';

import { filter, take } from 'rxjs/operators';

import { GraphicCard } from '../../../../shared/interfaces/graphicCard.interface';
import { GraphicCardService } from '../../../../shared/services/graphic-card.service';
import { TrackHttpError } from '../../../../shared/models/trackHttpError';
import { Observable } from 'rxjs';
import { selectListGraphics, selectLoading } from 'src/app/state/selectors/graphics.selectors';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { loadGraphics } from 'src/app/state/actions/graphics.actions';

type RequestInfo = {
  next: string;
};
@Component({
  selector: 'app-graphic-card-list',
  templateUrl: './graphic-card-list.component.html',
  styleUrls: ['./graphic-card-list.component.scss']
})
export class GraphicCardListComponent implements OnInit {

  graphicsCards: GraphicCard[] = [];

  info: RequestInfo = {
    next: '',
  };

  showGoUpButton = false;

  private pageNum = 1;

  private hideScrollHeight = 200;

  private showScrollHeight = 500;
/*
  constructor(
    @Inject(DOCUMENT) private document:Document,
    private graphicCardSvc: GraphicCardService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    
  }

  ngOnInit(): void {
    this.getDataFromService();
  }*/

  /*private getDataFromService(): void {
    this.graphicCardSvc
      .getGraphicCardList()
      .subscribe(res => 
        {this.graphicsCards = res;
      })
}*/
/*
private getDataFromService(): void {
  this.graphicCardSvc
    .getDataApi()
    .subscribe(res => 
      {this.graphicsCards = res;
    })
}
*/
graphicsCards$: Observable<any> = new Observable()
loading$: Observable<boolean> = new Observable()

constructor(private store: Store<AppState>) {

}

ngOnInit(): void {
  this.loading$ = this.store.select(selectLoading)//TODO: true, false
  this.store.dispatch(loadGraphics())
  this.graphicsCards$ = this.store.select(selectListGraphics)
  console.log(this.graphicsCards$);
}


}