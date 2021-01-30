import { LeadService } from './../../services/lead.service';
import { GetJsonDataService } from './../../services/get-json-data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {
  form = new FormGroup({});

  model = { };

  fields: FormlyFieldConfig[] = [];

  constructor(
    private router: Router, 
    private getJsonDataService: GetJsonDataService, 
    private leadService: LeadService) { }

  ngOnInit(): void {
    this.model = this.leadService.lead; 
    this.getJsonDataService.getStepOneJson().subscribe(field => {
      this.fields = field;
    })
  }

  onSubmit(form: FormGroup) {
    this.leadService.lead = this.model;
    this.router.navigate(["step-two"]);
  }

}
