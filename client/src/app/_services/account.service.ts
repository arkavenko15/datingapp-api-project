import { User } from './../_models/user';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  public baseUrl = environment.apiUrl;

  private currentUserSource = new ReplaySubject<User>(1);
  public currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) {}

  public login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if(user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  public register(model: any) {
    return this.http.post(this.baseUrl + 'account/register', model).pipe(
      map((response:User)=>{
        const user = response;
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);

        }
        return user
      })
    )
  }

  public setCurrentUser(user: User) {
    this.currentUserSource.next(user)
  }

  public logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
