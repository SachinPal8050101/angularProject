import { Component, Input, OnChanges, OnInit ,OnDestroy} from '@angular/core';
import { RentalService } from './rentalList.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges {


  constructor(public rentalService: RentalService){

  }
  ngOnInit(): void {
  }
  ngOnChanges(): void {

  }
  
}