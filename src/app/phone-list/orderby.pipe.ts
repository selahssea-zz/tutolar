import { Pipe, PipeTransform } from '@angular/core';
import { Phone } from './phone';

@Pipe({name: 'orderBy'})
export class OrderByPipe implements PipeTransform {
  transform(items: Phone[], key: string): Phone[] {
    return items.sort((a, b) => {
      const x = a[key];
      const y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }
}
