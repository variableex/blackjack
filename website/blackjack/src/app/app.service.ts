import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class AppService {
  headers: any;

  constructor(private _http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Credentials' : 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    });
  }

  gameStatrted(objectData): Observable<any> {
    const body = objectData;
    return this._http.post('http://localhost:8080' + '/api/blackJack/' + 'createBlackJack/', body, this.headers)
          .pipe(catchError(this.handleError));
  }

  pushmove(objectData): Observable<any> {
    const body = objectData;
    return this._http.post('http://localhost:8080' + '/api/blackJack/' + 'pushMoves/', body, this.headers)
          .pipe(catchError(this.handleError));
  }

  popmove(objectData): Observable<any> {
    const body = objectData;
    return this._http.post('http://localhost:8080' + '/api/blackJack/' + 'popMoves/', body, this.headers)
          .pipe(catchError(this.handleError));
  }

  result(objectData): Observable<any> {
    const body = objectData;
    return this._http.post('http://localhost:8080' + '/api/blackJack/' + 'result/', body, this.headers)
          .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
        console.error('An error occurred:', error.error.message);
      } else {
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error.message}`);
      }
    return throwError(error.error.message ? error.error.message : 'Something bad happened; please try again later.');
}
}
