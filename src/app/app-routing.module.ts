import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ParameterComponent } from './parameter/parameter.component';

export const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'time', component: ParameterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
