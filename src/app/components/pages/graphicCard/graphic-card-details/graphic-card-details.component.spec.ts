import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
import { cold } from 'jasmine-marbles';
import { take } from 'rxjs/operators';

import { GraphicCardDetailsComponent } from './graphic-card-details.component';
import { GraphicCardService } from '../../../../shared/services/graphic-card.service';
import { GraphicCard } from '../../../../shared/interfaces/graphicCard.interface';

describe('GraphicCardDetailsComponent', () => {
  let component: GraphicCardDetailsComponent;
  let fixture: ComponentFixture<GraphicCardDetailsComponent>;
  let mockActivatedRoute: any;
  let mockGraphicCardService: any;
  let mockLocation: any;

  beforeEach(async () => {
    /*mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get').and.returnValue('1')
        }
      }
    };*/
    mockGraphicCardService = {
      getDetails: jasmine.createSpy('getDetails').and.returnValue(of())
    };
    mockLocation = {
      back: jasmine.createSpy('back')
    };

    const mockActivatedRoute = {
      params: of({ id: '1' })
    };

    await TestBed.configureTestingModule({
      declarations: [ GraphicCardDetailsComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: GraphicCardService, useValue: mockGraphicCardService },
        { provide: Location, useValue: mockLocation }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicCardDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct graphic card after subscribing', () => {
    const mockGraphicCard: GraphicCard = {
      id: 1, name: 'Nvidia GTX 1080',
      manufacturer: '',
      model: '',
      price: 0,
      image: ''
    };
    mockGraphicCardService.getDetails.and.returnValue(of(mockGraphicCard));
    component.ngOnInit();
    expect(component.graphicCard$).toBeObservable(cold('(a|)', { a: mockGraphicCard }));
  });

  it('should call location.back() when onGoBack() is called', () => {
    component.onGoBack();
    expect(mockLocation.back).toHaveBeenCalled();
  });
});