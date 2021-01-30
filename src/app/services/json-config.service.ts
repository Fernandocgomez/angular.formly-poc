import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../models/app-config.model';

@Injectable({
  providedIn: 'root'
})
export class JsonConfigService extends AppConfig {

  constructor(private http: HttpClient) { 
    super();
  }

  load() {
    return this.http.get<AppConfig>("../../assets/config.json")
    .toPromise()
    .then(data => {
      this.BRAND = data.BRAND;
      this.BASE_URL = data.BASE_URL;
      this.GOOGLE_ANALYTICS_TRACKING_ID = data.GOOGLE_ANALYTICS_TRACKING_ID;
    })
    .catch((error) => {
      console.log("Could not load config file", error);
    })
  }
}
