import { Component } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Nova Dao';

  constructor(private productService: ProductService) {
    //this.getCSRF();
  }

  ngOnInit(): void {
    if (localStorage.getItem('logout') == 'true') {
      localStorage.removeItem('walletId');
    }
  }

  getCSRF() {
    this.productService.getCSRF().subscribe(
      (result) => {},
      (error) => {}
    );
  }
}
