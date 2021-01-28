import { HttpClient } from '@angular/common/http';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetJsonDataService {
  constructor(private http: HttpClient) { }

  getJson() {
    return this.http
      .get<FormlyFieldConfig[]>('../../assets/formly-config.json')
  }
}
