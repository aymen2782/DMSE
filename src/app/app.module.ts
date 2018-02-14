import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { ColorComponent } from './color/color.component';
import { TwowayComponent } from './twoway/twoway.component';
import { CvCardComponent } from './cv-card/cv-card.component';
import { CompFilsComponent } from './comp-fils/comp-fils.component';
import { CvComponent } from './cv/cv.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { WordComponent } from './word/word.component';
import { LampeComponent } from './lampe/lampe.component';
import { HighlightDirective } from './highlight.directive';
import { TestDirectiveComponent } from './test-directive/test-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    ColorComponent,
    TwowayComponent,
    CvCardComponent,
    CompFilsComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    WordComponent,
    LampeComponent,
    HighlightDirective,
    TestDirectiveComponent
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
