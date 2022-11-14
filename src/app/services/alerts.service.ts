import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project, Country } from '../models/models';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  //this will have to be replaced by actual http interceptor
  auth_token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyNDYiLCJleHAiOjE2Njc1NzY3OTUsImp0aSI6IjQ1NjVmODM2LTRkMWItNDAwNS05YjUwLWJkMzhlOTI3ZGQxZSJ9.8SYQFOL5CCeb1dSt3Ji9JI0EWxOiLhSTjwAswiXDbzg';
  baseUrl = "http://localhost:8000/"

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'accept': 'application/json',
      'Authorization': this.auth_token
    })
  };

  constructor(private http: HttpClient) { }

  GetCountryList(): Observable<Country[]> {
    return this.http
              .get<Country[]>(this.baseUrl + 'country/list', this.httpOptions)
              .pipe(retry(1), catchError(this.handleError));
  }


  GetProjectsList(): Observable<Project[]> {
    return this.http
              .get<Project[]>(this.baseUrl + 'projects', this.httpOptions)
              .pipe(retry(1), catchError(this.handleError));
  }

  //Error Handling
  handleError(error: any) {
    let errorMessage = '';

    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
    }

    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
