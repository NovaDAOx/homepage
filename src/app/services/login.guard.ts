import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve,reject) => {
      
      const userAddress =localStorage.getItem('walletId')
      if(!userAddress)
      {
        resolve(false)
        window.alert('Please login to proceed')
      }
      if(userAddress)
      {
        resolve(true)
        console.log('logged in')

      }

    })
  }
  
}
