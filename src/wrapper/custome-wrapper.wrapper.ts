// panel-wrapper.component.ts
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
selector: 'formly-wrapper-panel',
template: `
   <div [class]="to.wrapperClass">
        <label [class]="to.labelClass ? to.labelClass : ''">{{ to.label }}</label>
        <ng-container #fieldComponent></ng-container>
   </div>
`,
})
export class CustomeWrapperComponent extends FieldWrapper {
}