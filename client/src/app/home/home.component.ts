import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public registerMode = false;
  public users: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public registerToggle() {
    this.registerMode = !this.registerMode;
  }

  public getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(users => this.users = users)
  }
}
