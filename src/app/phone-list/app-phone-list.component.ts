import { Component, OnInit } from '@angular/core';
import { Phone } from './phone';
import { PhoneService } from './phone.service';

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
