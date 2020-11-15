import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../myClasses/student';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  loan: number = 5000;
  less: number = 100;
  great: number = 500;
  @Input() financeinfo: Student;
  constructor() { }

  ngOnInit(): void {
  }

}
