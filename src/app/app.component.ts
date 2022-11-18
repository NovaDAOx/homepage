import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
// import Moralis from 'moralis/types'
import { MoralisService } from './services/moralis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Nova Dao';
  


  constructor(private productService: ProductService,private moralisservice:MoralisService) {
    const userAddress = localStorage.getItem('walletId')
   
    
    
  }
  list:String[]
async test()
{
 
  this.moralisservice.getData().subscribe((res) =>{
console.log(res, 'this is the best test from app section .ts !^!^!^!^!^!^!^!^!^!^!^!^!^!^!^!^!^!^!^!^!^!^!^!^')
  })
  const data = await document.getElementById('ProtectedDAO')
  console.log(data,'???????????????????????????????????????????')
}
//   allNFT()
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
 this.test()
      
  }

  getCSRF() {
    this.productService.getCSRF().subscribe(
      (result) => {},
      (error) => {}
    );
  }
}