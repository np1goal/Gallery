import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ObjectsApiService {

  constructor(private http: HttpClient) { }

  public getObjects() {
    //Pages: 1 to 1000
    return this.http.get('https://www.rijksmuseum.nl/api/en/collection?key=' + environment.api + '&p=200');
  }
}
