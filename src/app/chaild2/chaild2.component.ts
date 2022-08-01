import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chaild2',
  templateUrl: './chaild2.component.html',
  styleUrls: ['./chaild2.component.css']
})
export class Chaild2Component implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
    console.log(history.state)
  }

}
