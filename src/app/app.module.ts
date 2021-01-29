import { MainWrapperComponent } from './../wrapper/main.wrapper';
import { HttpClientModule } from '@angular/common/http';
import { CustomeWrapperComponent } from './../wrapper/custome-wrapper.wrapper';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

// Custom type
import { FormlyFieldCustomeInput } from './../types/custome-input.type';
import { FormlyFieldMainInputComponent } from './../types/main-input.type';

// Components
import { StepOneComponent } from './components/step-one/step-one.component';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { StepThreeComponent } from './components/step-three/step-three.component';

@NgModule({
  declarations: [
    AppComponent, 
    FormlyFieldCustomeInput,
    FormlyFieldMainInputComponent, 
    StepOneComponent, 
    StepTwoComponent, 
    StepThreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ 
      extras: { lazyRender: true },
      types: [
        { name: "custome-input", component: FormlyFieldCustomeInput },
        { name: "main-input", component: FormlyFieldMainInputComponent }
      ], 
      wrappers: [
        { name: "custome-wrapper", component: CustomeWrapperComponent },
        { name: "main-wrapper", component: MainWrapperComponent }
      ]
    }),
    FormlyBootstrapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
