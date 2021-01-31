import { JsonConfigService } from './json-config.service';
import { HttpClient } from '@angular/common/http';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetJsonDataService {
  
  constructor(private http: HttpClient, private jsonConfigService: JsonConfigService) { }

  getFieldConfig(jsonFieldConfig: string) {
    return this.http.get<FormlyFieldConfig[]>(`../../assets/${this.jsonConfigService.BRAND}/${jsonFieldConfig}.json`)
  }
}
