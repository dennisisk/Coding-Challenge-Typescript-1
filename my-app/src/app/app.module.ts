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
    ArrowFunctionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
