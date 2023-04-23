import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, catchError, delay, of, pipe, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { GraphicCard } from '../interfaces/graphicCard.interface';


@Injectable({
  providedIn: 'root',
})
export class GraphicCardService {
  constructor(private httpClient: HttpClient) {}

  getGraphicCardList(name: string, cards: number):Observable<GraphicCard[]>{
    return this.httpClient.get<GraphicCard[]>(`${environment.baseUrlAPI}?name_like=${name}&_limit=${cards}`)
    .pipe(
      delay(1500)
    )
  }

  getDataApi(): Observable<GraphicCard[]> {
    return this.httpClient.get<GraphicCard[]>(`${environment.baseUrlAPI}`)
  }

  getDetails(id: number): Observable<any>{
    return this.httpClient.get<GraphicCard[]>(`${environment.baseUrlAPI}/?id=${id}`)
  }
}