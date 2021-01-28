import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType, FieldWrapper } from '@ngx-formly/core';

@Component({
 selector: 'formly-field-custome-input',
 template: `
  <input
    *ngIf="!to.hidden"
    type="input" 
    [formControl]="formControl" 
    [formlyAttributes]="field"
    [placeholder]="to.label"
  >
 `,
})
export class FormlyFieldCustomeInput extends FieldType {
  formControl!: FormControl;
}