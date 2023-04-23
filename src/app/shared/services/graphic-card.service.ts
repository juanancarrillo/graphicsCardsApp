import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, catchError, delay, of, pipe, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { GraphicCard } from '../interfaces/graphicCard.interface';

import { TrackHttpError } from '../models/trackHttpError';

@Injectable({
  providedIn: 'root',
})
export class GraphicCardService {
  constructor(private httpClient: HttpClient) {}

  getGraphicCardList():Observable<GraphicCard[]>{
    return this.httpClient.get<GraphicCard[]>(`${environment.baseUrlAPI}`)
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

  private handleHttpError(
    error:HttpErrorResponse
  ):Observable<TrackHttpError>{

    let dataError = new TrackHttpError();
    dataError.errorNumber = error.status;
    dataError.message = error.statusText;
    dataError.friendlyMessage = 'An error occured retrienving data.';
    return throwError(dataError);
  }


}