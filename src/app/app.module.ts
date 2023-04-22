import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicHightLightDirective } from './basic-highlight/basic.directive';
import { BetterHighlightDirective } from './better/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent, 
    BasicHightLightDirective, 
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
