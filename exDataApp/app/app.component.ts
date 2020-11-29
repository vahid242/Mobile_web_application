import { Component } from '@angular/core';
import {Student} from './myClasses/student';
import{CP, CPHead} from './cpInterface';
import cpTerm from '../assets/data/cp.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'extDataApp';

  bio: Student = {
    sname: "Vahid G",
    sid: "910000000"
  }
  t01: CP[] = cpTerm.cpterm01;
  t02: CP[] = cpTerm.cpterm02;

  cpHead: CPHead = cpTerm;

}
