import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicTypesComponent } from './Challenge-Questions/basic-types/basic-types.component';
import { ParameterTypesComponent } from './Challenge-Question/parameter-types/parameter-types.component';
import { OptionalDefaultParametersComponent } from './Challenge-Questions/optional-default-parameters/optional-default-parameters.component';
import { UnionsAliasesConstEnumsComponent } from './Challenge-Questions/unions-aliases-const-enums/unions-aliases-const-enums.component';
import { ClassesComponent } from './Challenge-Questions/classes/classes.component';
import { ClassExtensionComponent } from './Challenge-Questions/class-extension/class-extension.component';
import { InterfacesComponent } from './Challenge-Questions/interfaces/interfaces.component';
import { GenericsComponent } from './Challenge-Questions/generics/generics.component';
import { ArrowFunctionsComponent } from './Challenge-Questions/arrow-functions/arrow-functions.component';
import { ModulesSimpleComponent } from './Challenge-Questions/modules-simple/modules-simple.component';
import { ModulesComponent } from './Challenge-Questions/modules/modules.component';
import { CompounderComponent } from './Challenge-Questions/compounder/compounder.component';
import { GreeterComponent } from './Challenge-Questions/greeter/greeter.component';
import { CalculatorComponent } from './Challenge-Questions/calculator/calculator.component';
import { CalculatorJqueryComponent } from './Challenge-Questions/calculator-jquery/calculator-jquery.component';
import { BankingComponent } from './Challenge-Questions/banking/banking.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicTypesComponent,
    ParameterTypesComponent,
    OptionalDefaultParametersComponent,
    UnionsAliasesConstEnumsComponent,
    ClassesComponent,
    ClassExtensionComponent,
    InterfacesComponent,
    GenericsComponent,
    ArrowFunctionsComponent,
    ModulesSimpleComponent,
    ModulesComponent,
    CompounderComponent,
    GreeterComponent,
    CalculatorComponent,
    CalculatorJqueryComponent,
    BankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
