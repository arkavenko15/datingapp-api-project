import { AccountService } from './../_services/account.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public model: any = {};
  constructor(private accountService: AccountService, private toastr: ToastrService) {}

  ngOnInit(): void {}

  public register() {
    return this.accountService.register(this.model).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
        this.toastr.error(error.error)
      }
    );
  }

  public cancel() {
    console.log('cancelled');
  }
}
