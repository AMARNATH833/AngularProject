import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpeedPipe } from 'projects/custom/src/app/speed.pipe';
import { CustomDirectiveComponent } from './customDirective/customDirective.component';
import { BeautyDirective } from './beauty.directive';

@NgModule({
  declarations: [		
    AppComponent,SpeedPipe,
      CustomDirectiveComponent,
      BeautyDirective
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
