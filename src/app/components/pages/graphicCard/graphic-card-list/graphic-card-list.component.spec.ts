import { DOCUMENT } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ComponentFixture, fakeAsync, inject, TestBed, tick,
} from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { GraphicCard } from '../../../../shared/interfaces/graphicCard.interface';
import { GraphicCardListComponent } from './graphic-card-list.component';
import { loadGraphics } from 'src/app/state/actions/graphics.actions';
import { selectLoading, selectListGraphics } from 'src/app/state/selectors/graphics.selectors';
import { EffectsModule } from '@ngrx/effects';
import { DebugElement } from '@angular/core';

describe('GraphicCardListComponent', () => {
  let component: GraphicCardListComponent;
  let fixture: ComponentFixture<GraphicCardListComponent>;
  let store: Store<AppState>;
  let router: Router;
  let de: DebugElement;
  let el: HTMLElement;
  let document: any;

  const mockActivatedRoute = {
    queryParamMap: of(convertToParamMap({})),
  };

  const mockGraphicsCards: GraphicCard[] = [
    {
      id: 1,
      name: "Asus Rog Strix",
      manufacturer: "Asus",
      model: "Rog Strix",
      price: 200.4,
      image: "https://media.ldlc.com/r1600/ld/products/00/05/98/32/LD0005983210.jpg"
    },
    {
      id: 2,
      name: "Asus Rog Strix",
      manufacturer: "Asus",
      model: "Rog Strix",
      price: 200.4,
      image: "https://media.ldlc.com/r1600/ld/products/00/05/98/32/LD0005983210.jpg"
    },
  ];

  const mockStore = {
    dispatch: jasmine.createSpy('dispatch'),
    select: jasmine.createSpy('select').and.returnValue(of(false)),
  };

  const mockDocument = {
    querySelectorAll: () => [],
  body: {
    scrollTop: 0,
    appendChild: () => {}
  },
  documentElement: jasmine.createSpyObj('documentElement', ['scrollTop'])
  };

  mockDocument.documentElement.scrollTop.and.returnValue(0);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
      ],
      declarations: [GraphicCardListComponent],
      providers: [
        { provide: Store, useValue: mockStore },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: DOCUMENT, useValue: mockDocument  },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicCardListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
    fixture.detectChanges();
    de = fixture.debugElement;
    el = de.nativeElement;

    document = TestBed.inject(DOCUMENT);
  });

  it('should create', () => {
    const  mockDocumentSpy = spyOn(mockDocument.body, 'appendChild');
    expect(component).toBeTruthy();
  });

  it('should get graphics cards on init', () => {
    const  mockDocumentSpy = spyOn(mockDocument.body, 'appendChild');
    spyOn(component, 'getGraphicsCard');
    component.ngOnInit();
    expect(component.getGraphicsCard).toHaveBeenCalled();
  });

  it('should load graphics cards when the store dispatches loadGraphics action', () => {
    const  mockDocumentSpy = spyOn(mockDocument.body, 'appendChild');
    spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(loadGraphics({ name: '', cards: 6 }));
    expect(component.graphicsCards$).toEqual(jasmine.anything());
    expect(component.loading$).toEqual(jasmine.anything());
    expect(store.select(selectListGraphics)).toHaveBeenCalled();
  });

  it('should increase limit when onScrollDown is called', () => {
    const  mockDocumentSpy = spyOn(mockDocument.body, 'appendChild');
    component.limit = 6;
    component.onScrollDown();
    expect(component.limit).toBe(9);
  });

  it('should go to top when onScrollTop is called', () => {
    const mockDocumentSpy = spyOn(mockDocument.documentElement, 'scrollTop');
    component.onScrollTop();
    expect(mockDocumentSpy).toHaveBeenCalledWith(0);

    mockDocumentSpy.calls.reset();
    component.onScrollTop();
    expect(mockDocumentSpy).toHaveBeenCalledWith(0);
  });
});