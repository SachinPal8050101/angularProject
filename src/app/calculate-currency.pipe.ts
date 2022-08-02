import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateCurrency'
})
export class CalculateCurrencyPipe implements PipeTransform {

  transform(value: number): number {
    if(value>10){
      return 10*75;
    }
    return 10*50;
  }

}
