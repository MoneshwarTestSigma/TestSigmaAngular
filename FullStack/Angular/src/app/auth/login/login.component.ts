import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';  
import { UserService } from "./../../service/user.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userData;
  
  constructor(private user: UserService ,private http:HttpClient) {}

  ngOnInit() {
    this.user.currentUserData.subscribe(userData => (this.userData = userData));
  }

  changeData(event) {
    var msg = event.target.value;
    this.user.changeData(msg);
  }
  login(data) {
    this.user.changeData(data);
    return this.http.get(`localhost:8080/dashboard`, { responseType: 'text' }); 
  }
}
