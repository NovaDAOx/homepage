import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { windowCount } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminguardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise(( resolve, reject) => {

      const userAddres = localStorage.getItem('walletId');
      const admin = environment.CoreTeam
      console.log('00000000000000000000',admin[2])
      
      if (!userAddres)
      {
        resolve(false);
        console.log('please  connect wallet to proceed')
        window.alert('Please connect wallet to proceed')
      }
     
      if(userAddres.toLowerCase() === admin[0].toLowerCase() )
      {
       resolve(true)
      }
      else if(userAddres.toLocaleLowerCase() === admin[1].toLocaleLowerCase())
      {
        resolve(true)
      }
      else if (userAddres.toLocaleLowerCase() === admin[2].toLocaleLowerCase())
      {
        resolve(true)
      }
      else
      {
        window.alert('you are not admin')
      }
    
    // if(userAddres.toLowerCase() != admin[0].toLowerCase() && userAddres.toLocaleLowerCase()!=admin[1] && userAddres.toLocaleLowerCase()!=admin[2])
    //   {
    //     window.alert('Admin only')
    //   }
   
    
    });
  }
  
}
