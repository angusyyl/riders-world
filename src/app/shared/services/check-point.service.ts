import { Injectable } from '@angular/core';
import { CheckPoint } from '../models/check-point.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError as observableThrowError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckPointService {

  // mocking
  private _url: string;
  private _url1: string = 'http://www.mocky.io/v2/5d81f1ff300000af6d699971?mocky-delay=2000ms';
  private _url5: string = 'http://www.mocky.io/v2/5d81b282300000c365699785?mocky-delay=500ms';

  constructor(private http: HttpClient) { }

  getCheckPoints(tripId: number): Observable<any[]> {
    console.log('Trip marker: ' + tripId + ' is clicked');
    // mocking
    if (tripId !== 5) {
      this._url = this._url1;
    } else {
      this._url = this._url5;
    }
    return this.http.get<[]>(this._url).pipe(retry(3), catchError(this.errorHandler));
  }

  private errorHandler(error: HttpErrorResponse) {
    console.error(error.message);
    return observableThrowError(error.message);
  }
}
