import { StepThreeComponent } from './components/step-three/step-three.component';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { StepOneComponent } from './components/step-one/step-one.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "step-one", component: StepOneComponent, data: { animation: '1' } },
  { path: "step-two", component: StepTwoComponent, data: { animation: '2' } },
  { path: "step-three", component: StepThreeComponent, data: { animation: '3' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
