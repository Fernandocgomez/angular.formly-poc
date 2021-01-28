import { HttpClientModule } from '@angular/common/http';
import { CustomeWrapperComponent } from './../wrapper/custome-wrapper.wrapper';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

// Custome type
import { FormlyFieldCustomeInput } from './../types/custome-input.type';

@NgModule({
  declarations: [
    AppComponent, 
    FormlyFieldCustomeInput
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ 
      extras: { lazyRender: true },
      types: [
        { name: "custome-input", component: FormlyFieldCustomeInput },
      ], 
      wrappers: [
        { name: "custome-wrapper", component: CustomeWrapperComponent }
      ]
    }),
    FormlyBootstrapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
