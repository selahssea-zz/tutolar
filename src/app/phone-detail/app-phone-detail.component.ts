import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Phone } from '../phone-list/phone';
import { PhoneService } from '../phone-list/phone.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './app-phone-detail.component.html',
  styleUrls: ['./app-phone-detail.component.css'],
  providers: [PhoneService]
})
export class AppPhoneDetailComponent implements OnInit {
  phone: Phone;
  mainImageUrl: string;

  constructor(
    private phoneService: PhoneService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        return this.phoneService.getPhone(params.get('id'));
      })
      .subscribe(phone => {
        this.phone = phone;
        this.mainImageUrl = this.phone.images[0];
      });
  }

  goBack(): void {
    this.location.back();
  }

  setImage(imgUrl: string): void {
    this.mainImageUrl = imgUrl;
  }

}
