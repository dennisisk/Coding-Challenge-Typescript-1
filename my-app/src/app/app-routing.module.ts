import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicTypesComponent } from './Challenge-Questions/basic-types/basic-types.component';
import { ArrowFunctionsComponent } from './Challenge-Questions/arrow-functions/arrow-functions.component';
import { GenericsComponent } from './Challenge-Questions/generics/generics.component';
import { InterfacesComponent } from './Challenge-Questions/interfaces/interfaces.component';
import { ClassExtensionComponent } from './Challenge-Questions/class-extension/class-extension.component';
import { ClassesComponent } from './Challenge-Questions/classes/classes.component';
import { UnionsAliasesConstEnumsComponent } from './Challenge-Questions/unions-aliases-const-enums/unions-aliases-const-enums.component';
import { OptionalDefaultParametersComponent } from './Challenge-Questions/optional-default-parameters/optional-default-parameters.component';
import { ParameterTypesComponent } from './Challenge-Questions/parameter-types/parameter-types.component';
import { ModulesComponent } from './Challenge-Questions/modules/modules.component';
import { ModulesSimpleComponent } from './Challenge-Questions/modules-simple/modules-simple.component';
import { CompounderComponent } from './Challenge-Questions/compounder/compounder.component';
import { GreeterComponent } from './Challenge-Questions/greeter/greeter.component';
import { CalculatorComponent } from './Challenge-Questions/calculator/calculator.component';
import { CalculatorJqueryComponent } from './Challenge-Questions/calculator-jquery/calculator-jquery.component';
import { BankingComponent } from './Challenge-Questions/banking/banking.component';

const routes: Routes = [
  { path: 'basic-types', component: BasicTypesComponent },
  { path: 'parameter-types', component: ParameterTypesComponent },
  { path: 'optional-default-parameters', component: OptionalDefaultParametersComponent },
  { path: 'unions-aliases-const-enums', component: UnionsAliasesConstEnumsComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'class-extension', component: ClassExtensionComponent },
  { path: 'interfaces', component: InterfacesComponent },
  { path: 'generics', component: GenericsComponent },
  { path: 'arrow-functions', component: ArrowFunctionsComponent },
  { path: 'modules-simple', component: ModulesSimpleComponent },
  { path: 'modules', component: ModulesComponent },
  { path: 'compounder', component: CompounderComponent },
  { path: 'greeter', component: GreeterComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'calculator-jquery', component: CalculatorJqueryComponent },
  { path: 'banking', component: BankingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
