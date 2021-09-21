import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObjectsApiService {

  constructor(private http: HttpClient) { }

  public getObjects() {
    //Pages: 1 to 425
    return this.http.get('https://api.artic.edu/api/v1/artworks?page=40&fields=id,image_id,title,artist_display,date_display,config');
  }
}
