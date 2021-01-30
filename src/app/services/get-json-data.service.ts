import { HttpClient } from '@angular/common/http';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetJsonDataService {
  
  constructor(private http: HttpClient) { }

  getStepOneJson() {
    return this.http
    .get<FormlyFieldConfig[]>('../../assets/formly-step-one.json')
  }

  getStepThreeJson() {
    return this.http
    .get<FormlyFieldConfig[]>('../../assets/formly-step-three.json')
  }

  getStepTwoJson() {
    return this.http
    .get<FormlyFieldConfig[]>('../../assets/formly-step-two.json')
  }
}
