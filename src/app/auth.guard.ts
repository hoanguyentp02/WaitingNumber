import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {
    }
    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.check()) { //localStorage.getItem('currentUser')
            // logged in so return true
            return true;
        }
        // this.router.navigate(['/wno-booking/1234/0419AE5A422F81']);
        this.router.navigate(['/wno-booking/0/0']);
    }

    // private checkUserLoginedOrExpired(): boolean{
    //   let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //   if(currentUser == null){
    //     return false;
    //   }
    //   else if((new Date().getTime()) - currentUser.expired >= 0 ){
    //       return false
    //   }
    //   return true;
    // }
    private check(): boolean{
        return false;
    }
}