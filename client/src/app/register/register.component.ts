import { AccountService } from './../_services/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public model: any = {};
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  public register() {
    return this.accountService.register(this.model).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public cancel() {
    console.log('cancelled');

  }

}
