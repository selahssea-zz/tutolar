import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Phone} from './phone';

@Injectable()
export class PhoneService {
  private phonesUrl = 'assets/phones/phones.json';

  constructor(private http: Http) { }

  getPhones(): Promise<Phone[]> {
    return this.http.get(this.phonesUrl)
      .toPromise()
      .then(response => {
        return response.json() as Phone[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
