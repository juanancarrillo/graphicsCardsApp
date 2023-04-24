import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { GraphicCardService } from './graphic-card.service';
import { environment } from '../../../environments/environment';
import { GraphicCard } from '../interfaces/graphicCard.interface';

describe('GraphicCardService', () => {
  let service: GraphicCardService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GraphicCardService]
    });
    service = TestBed.inject(GraphicCardService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('getGraphicCardList', () => {
    it('should return an Observable<GraphicCard[]>', () => {
      const mockGraphicCards: GraphicCard[] = [
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
        }
      ];

      service.getGraphicCardList('RTX', 5).subscribe((cards: GraphicCard[]) => {
        expect(cards.length).toBe(2);
        expect(cards).toEqual(mockGraphicCards);
      });

      const request = httpMock.expectOne(
        `${environment.baseUrlAPI}?name_like=RTX&_limit=5`
      );
      expect(request.request.method).toBe('GET');
      request.flush(mockGraphicCards);
    });
  });

  describe('getDataApi', () => {
    it('should return an Observable<GraphicCard[]>', () => {
      const mockGraphicCards: GraphicCard[] = [
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
        }
      ];

      service.getDataApi().subscribe((cards: GraphicCard[]) => {
        expect(cards.length).toBe(2);
        expect(cards).toEqual(mockGraphicCards);
      });

      const request = httpMock.expectOne(`${environment.baseUrlAPI}`);
      expect(request.request.method).toBe('GET');
      request.flush(mockGraphicCards);
    });
  });

  describe('getDetails', () => {
    it('should return an Observable<any>', () => {
      const mockDetails = {
        id: 1,
        name: "Asus Rog Strix",
        manufacturer: "Asus",
        model: "Rog Strix",
        price: 200.4,
        image: "https://media.ldlc.com/r1600/ld/products/00/05/98/32/LD0005983210.jpg"
      };

      service.getDetails(1).subscribe((details) => {
        expect(details).toEqual(mockDetails);
      });

      const request = httpMock.expectOne(`${environment.baseUrlAPI}/?id=1`);
      expect(request.request.method).toBe('GET');
      request.flush(mockDetails);
    });
  });
});