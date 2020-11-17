import { Component, OnInit, Input } from '@angular/core';
import { Student} from '../myClasses/student';
import {MYCLASSES} from '../../assets/data/myClasses';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  myclasses = MYCLASSES;
  @Input() maininfo:Student;
  constructor() { }

  ngOnInit(): void {
  }
  alertMe(){
    alert("Android Error");
  }
  onClickMe(index){
    var divs = document.getElementById("myList").getElementsByTagName("div");
    for(let x=0; x < divs.length; x++){
      if(x === index){
        if(divs[index].style.display == 'none'){
          divs[index].style.display = 'block';
        }
        else{
          divs[index].style.display='none';
        }
      }
      else{
        divs[x].style.display='none';
      }
    }
  }

}
