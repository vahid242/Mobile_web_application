import { Component, OnInit } from '@angular/core';
import {Sales} from '../myClasses/sales';
import {SalesHeader} from '../myClasses/sales';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css']
})
export class CsvComponent implements OnInit {

  csvData: Sales[]=[];
  csvHeader: SalesHeader[]=[];

  fileUrl= "../../assets/data/SalesOrders.csv";
  constructor() { }

  ngOnInit(): void {
  }

  async ngAfterViewInit(){
    var response = await fetch(this.fileUrl);
    var data= await response.text();

    //console.log(data);
    // split data based on \n
    let lines = data.split("\n");
    //pull out header
    let headers: string;
    headers = lines[0];
    var words = lines[0].split(",");
    var h = new SalesHeader;

    h.sdate = words[0];
    h.region = words[1];
    h.rep = words[2];
    h.item = words[3];
    h.units = words[4];
    h.cost = words[5];
    h.total = words[6];

    this.csvHeader.push(h);
    // build the data line array
    for(let x=1; x < lines.length; x++){
      var words = lines[x].split(",");
      var p = new Sales;
      p.sdate = words[0];
      p.region = words[1];
      p.rep = words[2];
      p.item = words[3];
      p.units = parseFloat(words[4]);
      p.cost = parseFloat(words[5]);
      p.total = parseFloat(words[6]);
      this.csvData.push(p);
    }
  }
}
