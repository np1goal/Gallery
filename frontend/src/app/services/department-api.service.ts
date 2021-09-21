import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentApiService {

  constructor(private http: HttpClient) { }

  public getDepartments() {
    return this.http.get('https://collectionapi.metmuseum.org/public/collection/v1/departments')
  }
}
