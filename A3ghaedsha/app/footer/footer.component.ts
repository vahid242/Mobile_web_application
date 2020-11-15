import { Component, OnInit, Input} from '@angular/core';
import { Student } from '../myClasses/student';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() footerinfo: Student;
  vDate = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
