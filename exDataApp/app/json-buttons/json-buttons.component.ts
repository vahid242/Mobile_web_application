import { Component, OnInit, Input } from '@angular/core';
import{CP} from '../cpInterface';

@Component({
  selector: 'app-json-buttons',
  templateUrl: './json-buttons.component.html',
  styleUrls: ['./json-buttons.component.css']
})
export class JsonButtonsComponent implements OnInit {

  @Input() cpProg01: CP[];
  @Input() cpProg02: CP[];

  outArea: string;
  cpChoice: CP[];
  constructor() { }

  ngOnInit(): void {
  }

  displayJSON(term){
    switch(term){
      case 1: this.cpChoice = this.cpProg01; break;
      case 2: this.cpChoice = this.cpProg02; break;
    }
    this.outArea = `<h3>Class list for Term ${term}</h3>`
    this.outArea +=
    `
    <table>
    <tr><th>Class</th><th>Credits</th><th>Descreption</th>
    ` ;

    for(let cls of this.cpChoice){
      this.outArea +=
      `
      <tr>
        <td>${cls.class}</td>
        <td>${cls.credit}</td>
        <td>${cls.description}</td>
      </tr>
      `;
    }

  }

}
