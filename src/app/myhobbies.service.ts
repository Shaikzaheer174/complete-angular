import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { hobbyinterface } from './hobby';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyhobbiesService {
// we are not using server presently we use a  json file from assets folder.
// here the Url path for that
  private _url = "../assets/data/hobby.json"; // "../assets/data/hobby1.json"   to see the catcherror ex:

  gethobby():Observable<hobbyinterface[]> {
    return this._http.get<hobbyinterface[]>(this._url)   //hobbyinterface to get the data in our required type. 
      .pipe(catchError(this.errorHandler)); //;//Pipes let you combine multiple functions into a single function. The pipe() function takes as its arguments the functions you want to combine
       
  }

 errorHandler(error: HttpErrorResponse){    //error of type HttpErrorResponse 
  return throwError(error.message || "Unknown server error occurred");       //if the errormessage having null then we have a custom message here.. 
 }

  constructor(private _http: HttpClient) { }
}
