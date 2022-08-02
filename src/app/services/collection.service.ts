import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  apiUrl = environment.apiEndPoint;
  constructor(private http: HttpClient) {}

  getAllCollections() {
    return this.http.get<any>(this.apiUrl + '/collection');
  }

  getColors() {
    return this.http.get<any>(this.apiUrl + '/color');
  }
  getSizes() {
    return this.http.get<any>(this.apiUrl + '/size');
  }
  getMaterials() {
    return this.http.get<any>(this.apiUrl + '/material');
  }
}
