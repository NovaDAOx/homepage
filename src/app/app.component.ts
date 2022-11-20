import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
// import Moralis from 'moralis/types'
import { MoralisService } from './services/moralis.service';
import { EtherService } from './services/ether.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Nova Dao';
  


  constructor(private productService: ProductService,private moralisservice:MoralisService,private etherservice:EtherService) {
    const userAddress = localStorage.getItem('walletId')
   
    
    
  }
  list:String[]
  
//  {
//   this.moralisService.getnfts().then(data => {
//     console.log('stake.companent',data)
//     this.list=data
    
//   })
// }
  ngOnInit(): void {
   
    if (localStorage.getItem('logout') == 'true') {
      localStorage.removeItem('walletId');
    }
 
 this.moralisservice.protected()     
  }

  getCSRF() {
    this.productService.getCSRF().subscribe(
      (result) => {},
      (error) => {}
    );
  }
}