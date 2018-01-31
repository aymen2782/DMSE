import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp1/comp2.component';
import { BindingComponent } from './binding/binding.component';
import { ColorComponent } from './color/color.component';
import { TwowayComponent } from './twoway/twoway.component';
import { CvCardComponent } from './cv-card/cv-card.component';
import { CompFilsComponent } from './comp-fils/comp-fils.component';
import { CvComponent } from './cv/cv.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { WordComponent } from './word/word.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    BindingComponent,
    ColorComponent,
    TwowayComponent,
    CvCardComponent,
    CompFilsComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    WordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
