import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  public model: any = {};

  constructor(public accountService: AccountService, private router: Router) {}

  ngOnInit(): void {}

  public login() {
    return this.accountService.login(this.model).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log('error' + error);
      }
    );
  }



  public logout() {
    this.accountService.logout();
  }
}
