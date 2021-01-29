import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType, FieldWrapper } from '@ngx-formly/core';

@Component({
 selector: 'formly-field-main-input-component',
 template: `
  <input
    type="input" 
    [formControl]="formControl" 
    [formlyAttributes]="field"
    [placeholder]="to.placeholder"
  >
 `,
})
export class FormlyFieldMainInputComponent extends FieldType {
  formControl!: FormControl;
}