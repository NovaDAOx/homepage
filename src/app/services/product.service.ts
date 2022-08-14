import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getCSRF() {
    return this.http.get<any>(environment.apiEndPoint + '/csrf', {
      withCredentials: true,
    });
  }

  getProducts(obj: any) {
    return this.http.post<any>(
      environment.apiEndPoint + '/product/getProducts',
      obj
    );
  }

  getTokenById(id: any) {
    return this.http.get<any>(environment.apiEndPoint + '/token/getTokenById', {
      params: { id: id },
    });
  }

  getCollections() {
    return this.http.get<any>(environment.apiEndPoint + '/collection');
  }

  addShippingDetail(obj: any) {
    return this.http.post<any>(environment.apiEndPoint + '/shipping/add', obj);
  }
  getProductById(id: string) {
    return this.http.get<any>(
      environment.apiEndPoint + '/product/details/' + id
    );
  }

  getUserShippingDetails(wId: any) {
    return this.http.get<any>(
      environment.apiEndPoint + '/user/shippingaddress/' + wId
    );
  }
}
