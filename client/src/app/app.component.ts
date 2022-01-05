import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'This is Dating App';
  public users: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe((users) => {
      this.users = users;
      console.log(this.users);
      
    }, error => {
      console.log(error)
    })
  }


}
