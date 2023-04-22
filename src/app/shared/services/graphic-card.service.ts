import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, catchError, delay, of, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { GraphicCard } from '../interfaces/graphicCard.interface';

import data from '../../../assets/graphics-cards.json';
import { TrackHttpError } from '../models/trackHttpError';

@Injectable({
  providedIn: 'root',
})
export class GraphicCardService {
  constructor(private httpClient: HttpClient) {}

  getGraphicCardList():Observable<GraphicCard[]>{
    return this.httpClient.get<GraphicCard[]>(`${environment.baseUrlAPI}`);
  }


  getDataApi(): Observable<any> {
    this.httpClient.get(`${environment.baseUrlAPI}`).subscribe(data =>{
      console.log(data);   
    })
    return of(data).pipe(
      delay(1500)
    )
    .pipe(catchError((err) => this.handleHttpError(err)));
  }

  getDetails(id: number): Observable<any>  {
    this.httpClient.get<GraphicCard>(`${environment.baseUrlAPI}`)
    return of(data[id - 1])
    .pipe(catchError((err) => this.handleHttpError(err)));
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