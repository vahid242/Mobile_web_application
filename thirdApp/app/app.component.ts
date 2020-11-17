import { Component } from '@angular/core';
import { Student } from './myClasses/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thirdApp';

  bio: Student = { 
    sid : 991000000,
    sname:"Vahid G",
    scampus: "Davis",
    slogin:  "ghaedsha"
  }
}
