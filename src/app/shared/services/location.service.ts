import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getCurrentLocation(): Observable<Position> {
    return new Observable((observer: any) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          observer.next(pos);
          observer.complete();
        },
        err => {
          observer.error(err.message);
        });
      } else {
        observer.error('Unsupported Browser');
      }
    });
  }
}
