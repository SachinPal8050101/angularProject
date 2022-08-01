import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

@Input() movieData:any 
@Output() handleCount:EventEmitter<any> = new EventEmitter();

  constructor() {

   }

  ngOnInit(): void {
   
  }
  
  submit(){
    
  }

  logInForm= new FormGroup({
    sr:    new FormControl('6'),
    name:  new FormControl(''),
    Phone: new FormControl('')
  })

  CountIncrease(){
    this.handleCount.emit(this.movieData);
  }

}
