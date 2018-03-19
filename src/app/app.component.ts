import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StockData} from './stock-data';
import {StockService} from './stock.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { NgZone } from '@angular/core';
import { NseServiceService } from './nse-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  dataset: any;
  id: any;
  nseData: any;
  foodData:any;
 millData:any;
softwareData:any;
bankData:any;
energyData:any;
  constructor(private nseService: NseServiceService, private stockService: StockService, private zone: NgZone) { }

  private stockData: StockData[];

  ngOnInit() {
    this.nseService.getJSON("Food").subscribe((data3) => {this.foodData = data3;
    }, error => console.log(error));

   this.nseService.getJSON("Mill").subscribe((data2) => {this.millData = data2;
    }, error => console.log(error));

this.nseService.getJSON("Software").subscribe((data1) => {this.softwareData = data1;
    }, error => console.log(error));

this.nseService.getJSON("Bank").subscribe((output) => {this.bankData = output;
    }, error => console.log(error));

this.nseService.getJSON("Energy").subscribe((data) => {this.energyData = data;
    }, error => console.log(error));
  }

}
