import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  rootURL = "https://www.omdbapi.com/?apikey=ad99259a&";

  fetchFilms(searchTerm: string) {
    let response: any = this.http.get(this.rootURL + "s=" + searchTerm)
    return response
  }
}
