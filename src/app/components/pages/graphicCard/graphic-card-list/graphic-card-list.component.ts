import { DOCUMENT } from '@angular/common';
import {
  Component, HostListener, Inject, OnInit,
} from '@angular/core';
import {
  ActivatedRoute, NavigationEnd, ParamMap, Router,
} from '@angular/router';

import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';

import { GraphicCard } from '../../../../shared/interfaces/graphicCard.interface';
import { selectListGraphics, selectLoading } from 'src/app/state/selectors/graphics.selectors';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { loadGraphics } from 'src/app/state/actions/graphics.actions';


@Component({
  selector: 'app-graphic-card-list',
  templateUrl: './graphic-card-list.component.html',
  styleUrls: ['./graphic-card-list.component.scss']
})
export class GraphicCardListComponent implements OnInit {

  graphicsCards: GraphicCard[] = [];

  limit = 6
  private query: string = '';

  showGoUpButton = false;

  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  graphicsCards$: Observable<any> = new Observable()
  loading$: Observable<boolean> = new Observable()

constructor(
  private store: Store<AppState>,
  @Inject(DOCUMENT) private document:Document,
  private route: ActivatedRoute,
  private router: Router
  ) {
    this.onUrlChanged();
}

ngOnInit(): void {
  this.getGraphicsCard();
}

@HostListener('window:scroll', [])
  onWindowScroll():void {
    const yOffSet = window.pageYOffset;
    if ((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight) {
      this.showGoUpButton = true;
    } else if (this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrollHeight) {
      this.showGoUpButton = false;
    }
  }

onScrollDown():void{
    this.limit = this.limit + 3;
    this.getGraphicsCard();
}

onScrollTop():void{
  this.document.body.scrollTop = 0; // Safari
  this.document.documentElement.scrollTop = 0; // Other
}

private onUrlChanged(): void {
  this.router.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe(() => {
      this.limit = 6;
      this.getCharactersByQuery();
    });
}

private getCharactersByQuery(): void {
  this.route.queryParams.pipe(take(1)).subscribe((params: any) => {
    this.query = params['q'];
    this.getGraphicsCard();
  });
}

private getGraphicsCard(): void {
  if(this.query == undefined){
    this.query = '';
  }
  this.loading$ = this.store.select(selectLoading)
  this.store.dispatch(loadGraphics({name: this.query, cards: this.limit}))
  this.graphicsCards$ = this.store.select(selectListGraphics)
}
}