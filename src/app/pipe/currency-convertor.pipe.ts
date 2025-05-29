import { Pipe, PipeTransform } from '@angular/core';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Pipe({
  name: 'currencyConvertor'
})
export class CurrencyConvertorPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    if(args.length > 0) {
      const [data] = args;
      return value*data;
    } else {
      return value * 85.6
    }
  }

}
