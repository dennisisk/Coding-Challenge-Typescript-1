import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicTypesComponent } from './Challenge-Questions/basic-types/basic-types.component';

const routes: Routes = [
  { path: 'basic-types', component: BasicTypesComponent },
  { path: 'parameter-types', component: BasicTypesComponent },
  { path: 'optional-default-parameters', component: BasicTypesComponent },
  { path: 'unions-aliases-const-enums', component: BasicTypesComponent },
  { path: 'classes', component: BasicTypesComponent },
  { path: 'class-extension', component: BasicTypesComponent },
  { path: 'interfaces', component: BasicTypesComponent },
  { path: 'generics', component: BasicTypesComponent },
  { path: 'arrow-functions', component: BasicTypesComponent },
  { path: 'modules-simple', component: BasicTypesComponent },
  { path: 'modules', component: BasicTypesComponent },
  { path: 'compounder', component: BasicTypesComponent },
  { path: 'greeter', component: BasicTypesComponent },
  { path: 'calculator', component: BasicTypesComponent },
  { path: 'calculator-jquery', component: BasicTypesComponent },
  { path: 'banking', component: BasicTypesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
