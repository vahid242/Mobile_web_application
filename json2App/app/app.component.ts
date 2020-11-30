import { Component } from '@angular/core';
import {Card, Greet, Border, BorderEdge} from './interfaceCard';
import cardOptions from '../assets/data/cardJSON.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'json2App';
  /* variables for JSON data */
  cardSelect: Card = cardOptions;
  greetSelect: Greet[] = cardOptions.greeting;
  borderSelect: Border[] = cardOptions.borderColour;
  bEdgeSelect: BorderEdge[] = cardOptions.borderEdge;

  /* variables for selection defualt */
  selectionGreet = "Happy Holidays!";
  selectBorder = "green";
  selectEdge = "square";

  outCard: string;

  createCard(){
    this.outCard = 
    `
    <img src='assets/images/winter.jpg'>
    ${this.selectionGreet}
    <img src='assets/images/winter.jpg'><br>
    ${this.cardSelect.holiday.signature}<br><hr>
    Let me know how you are doing...<br>
    ${this.cardSelect.holiday.myemail}<br>
    <img src='assets/images/winter.jpg'><img src='assets/images/winter.jpg'><img src='assets/images/winter.jpg'>

    `;
    document.getElementById("outid").style.borderColor = this.selectBorder;
    document.getElementById("outid").style.color = this.selectBorder;
    if (this.selectEdge == "round"){
      document.getElementById("outid").style.borderRadius = '50px 50px 50px 50px';
    }
    else{
      document.getElementById("outid").style.borderRadius = '0px 0px 0px 0px';
    }
  }

}
