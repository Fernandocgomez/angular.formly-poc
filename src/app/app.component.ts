import { GetJsonDataService } from './services/get-json-data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  form = new FormGroup({});

  model = { 
    firstName: "Fernando",
    age: 27
  };

  fields: FormlyFieldConfig[] = [];

  constructor(private getJsonDataService: GetJsonDataService) {}

  ngOnInit() {
    this.getJsonDataService.getJson().subscribe(fields => {
      console.log(fields)
      this.fields = fields;
    })
  }

  onSubmit(form: FormGroup) {
    console.log(this.model);
  }

  
}
