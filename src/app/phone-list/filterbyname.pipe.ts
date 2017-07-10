import { Pipe, PipeTransform } from '@angular/core';
import { Phone } from './phone';

@Pipe({name: 'filterByName'})
export class FilterByNamePipe implements PipeTransform {
  transform(items: Phone[] = [], query: string): Phone[] {
    query = query.trim().toLowerCase();
    return items.filter(item => item.name.toLowerCase().includes(query));
  }
}
