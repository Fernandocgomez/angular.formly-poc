import { LeadService } from './../../services/lead.service';
import { GetJsonDataService } from './../../services/get-json-data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent implements OnInit {
  form = new FormGroup({});

  model = { };

  fields: FormlyFieldConfig[] = [];

  show = false;

  constructor(
    private getJsonDataService: GetJsonDataService, 
    private leadService: LeadService) { }

  ngOnInit(): void {
    this.model = this.leadService.lead;
    this.getJsonDataService.getFieldConfig("formly-step-three").subscribe(field => {
      this.fields = field;
    })
  }

  onSubmit(form: FormGroup) {
    this.leadService.lead = this.model;
    this.show = true;
  }

}
