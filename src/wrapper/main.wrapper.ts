import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
selector: 'formly-wrapper-panel',
template: `
   <div [class]="to.wrapperClass">
        <ng-container #fieldComponent></ng-container>
   </div>
`,
})
export class MainWrapperComponent extends FieldWrapper {
}