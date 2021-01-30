import { LeadService } from './../../services/lead.service';
import { GetJsonDataService } from './../../services/get-json-data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {

  form = new FormGroup({});

  model = { };

  fields: FormlyFieldConfig[] = [];

  constructor(
    private router: Router, 
    private getJsonDataService: GetJsonDataService, 
    private leadService: LeadService) { }

  ngOnInit(): void {
    this.model = this.leadService.lead; 
    this.getJsonDataService.getStepTwoJson().subscribe(field => {
      this.fields = field;
    })
  }

  onSubmit(form: FormGroup) {
    this.leadService.lead = this.model;
    this.router.navigate(["step-three"]);
  }


}
