import { Component } from '@angular/core';
import {Student} from "./myClasses/student";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A3ghaedsha';
  bio: Student= {
    firstName:"Vahid", lastName:"Ghaedsharaf",
    vid:991576881, vlogin: "ghaedsha"
  };
}
