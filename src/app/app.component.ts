import { Component, Input } from '@angular/core';
import {ChildComponentComponent} from './component/child-component/child-component.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = {sdd:'asdasda'};
  bestMovieEver= false;
  onClick(event: any){
    console.log('click',event);
  }
}