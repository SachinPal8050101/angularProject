import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chaild1',
  templateUrl: './chaild1.component.html',
  styleUrls: ['./chaild1.component.css']
})
export class Chaild1Component implements OnInit {

  constructor(private route:Router ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.route.navigate(['/newModule'],{state:{data:"abcd"}})
  }
}
