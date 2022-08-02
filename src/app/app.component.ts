import { Component, Input, OnChanges, OnInit ,OnDestroy} from '@angular/core';
import { CalculateCurrencyPipe } from './calculate-currency.pipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CalculateCurrencyPipe]
})
export class AppComponent implements OnInit,OnChanges {

  datePipeString : Number | undefined;

  // constructor(public datePipe: CalculateCurrencyPipe){
  //    this.datePipeString=datePipe.transform(38)
  // }


  ngOnInit(): void {
  }
  ngOnChanges(): void {

  }
  movieName1={
    id:1,name:"3-Idiot","year":"2005",count: 1
  }
  movieName2={
    id:2,name:"4-Idiot",year:"2006",count: 1
  }

  handleCount(movie: any){
    movie.count++;
    console.log(movie)
  }
}
