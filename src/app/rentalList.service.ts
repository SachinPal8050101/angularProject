import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})

export class RentalService{
   
constructor(){

}

movieName1={
    id:1,name:"3-Idiot","year":"2005",count: 1,imgSrc:'https://flxt.tmsimg.com/assets/p7951929_p_v8_aa.jpg'
  }
  movieName2={
    id:2,name:"4-Idiot",year:"2006",count: 1,imgSrc: 'https://theobjectivestandard.com/wp-content/uploads/2022/03/3-Idiots-Written-and-Directed-by-Rajkumar-Hirani.jpg'
  }

  handleCount(movie: any){
    movie.count++;
    console.log(movie)
  }

  clearRentalService(){
    this.movieName1.count=1;
    this.movieName2.count=1;
  }

}