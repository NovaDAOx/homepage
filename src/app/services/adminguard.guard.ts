import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminguardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise(( resolve, reject) => {

      const userAddres = localStorage.getItem('walletId').toLocaleLowerCase();
      const admin = environment.CoreTeam
      console.log('00000000000000000000',admin[2])
      
      if (!userAddres)
      {
        resolve(false);
        console.log('please  connect wallet to proceed')
        window.alert('Please connect wallet to proceed')
      }
      if(userAddres.toString() != admin[0].toString() && userAddres.toString() != admin[1].toString() && userAddres.toString() != admin[2].toString().toLocaleLowerCase() )
      {
        console.log('You are not an Admin')
        window.alert('You are not an Admin')
      }
      else
      {
        resolve(true);
        
      }

    
    });
  }
  
}
