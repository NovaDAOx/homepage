import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  createOrder(obj: any) {
    return this.http.post<any>(
      environment.apiEndPoint + '/order/createOrder',
      obj
    );
  }

  updateShippingDetailId(orderId: any, ShippingDetailId: any) {
    return this.http.post<any>(
      environment.apiEndPoint + '/order/updateShippingDetailId',
      { orderId, ShippingDetailId }
    );
  }

  getPendingOrders(id: any) {
    return this.http.get<any>(
      environment.apiEndPoint + '/order/getPendingOrders',
      {
        params: { id: id },
      }
    );
  }

  getAllOrders(data: any) {
    return this.http.post<any>(environment.apiEndPoint + '/order/list', data);
  }
  getOrderById(id: any) {
    return this.http.get<any>(environment.apiEndPoint + '/order/' + id);
  }

  deleteShippingById(id: any) {
    return this.http.get<any>(
      environment.apiEndPoint + '/shipping/delete/' + id
    );
  }
  updatePendingPayment(data: any) {
    return this.http.post<any>(environment.apiEndPoint + '/order/updateOrder', data);
  }
}
