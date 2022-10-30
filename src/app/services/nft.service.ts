import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NftService {
  constructor(private http: HttpClient) {}

  createNFT(walletAddress: any) {
    return this.http.get<any>(
      environment.apiEndPoint + '/nft/mint/' + walletAddress
    );
  }

  updateNFT(obj: any) {
    return this.http.post<any>(
      environment.apiEndPoint + '/nft/updateMint',
      obj
    );
  }

  getMintDetails(walletAddress: any) {
    return this.http.get<any>(
      environment.apiEndPoint + '/nft/getMint/' + walletAddress
    );
  }

  getMintCount() {
    return this.http.get<any>(environment.apiEndPoint + '/nft/getMintCount');
  }

  getMintAddress() {
    return this.http.get<any>(environment.apiEndPoint + '/nft/getMintAddress');
  }

  mintNFT(walletAddress: any, nftId: any) {
    return this.http.get<any>(
      environment.apiEndPoint + '/nft/remint/' + walletAddress + '/' + nftId
    );
  }
}
