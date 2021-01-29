import { StepThreeComponent } from './components/step-three/step-three.component';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { StepOneComponent } from './components/step-one/step-one.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "step-one", component: StepOneComponent },
  { path: "step-two", component: StepTwoComponent },
  { path: "step-three", component: StepThreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
