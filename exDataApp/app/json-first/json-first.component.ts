import { Component, OnInit, Input } from '@angular/core';
import{CP, CPHead} from '../cpInterface';

@Component({
  selector: 'app-json-first',
  templateUrl: './json-first.component.html',
  styleUrls: ['./json-first.component.css']
})
export class JsonFirstComponent implements OnInit {

  @Input() cpProg01: CP[];
  @Input() cpProg02: CP[];

  @Input() cpHead: CPHead;
  constructor() { }

  ngOnInit(): void {
  }

}
