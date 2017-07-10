import {Component, Pipe, PipeTransform, OnInit} from '@angular/core';
import {Phone} from './phone';
import {PhoneService} from './phone.service';

@Pipe({name: 'filterByName'})
export class FilterByNamePipe implements PipeTransform {
  transform(items: Phone[] = [], query: string): Phone[] {
    query = query.trim().toLowerCase();
    return items.filter(item => item.name.toLowerCase().includes(query));
  }
}

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

@Component({
  selector: 'app-phone-list',
  templateUrl: './app-phone-list.component.html',
  styleUrls: ['./app-phone-list.component.css'],
  providers: [PhoneService]
})
export class AppPhoneListComponent implements OnInit {
  phones: Phone[] = [];
  query = '';
  orderProp = 'age';

  constructor(private phoneService: PhoneService) { }

  getPhones(): void {
    this.phoneService.getPhones().then(phones => this.phones = phones);
  }

  ngOnInit(): void {
    this.getPhones();
  }
}
