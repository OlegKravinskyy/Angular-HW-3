import { NgModule, LOCALE_ID } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveListComponent } from './directive-list/directive-list.component';
import { DirectiveColorsComponent } from './directive-colors/directive-colors.component';
import { AllPipesComponent } from './all-pipes/all-pipes.component';
import { DeleteElementComponent } from './delete-element/delete-element.component';

registerLocaleData(localeEn, 'en-US');

@NgModule({
  declarations: [
    AppComponent,
    DirectiveListComponent,
    DirectiveColorsComponent,
    AllPipesComponent,
    DeleteElementComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideClientHydration(),
    { provide: LOCALE_ID, useValue: 'en-US' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
