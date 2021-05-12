import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Logger } from './log';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './pipes/custom-pipe';
import { DatePipe, SlicePipe } from '@angular/common';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    PipesComponent,
    CustomPipe
  ],
  providers: [ 
    Logger,
    DatePipe,
    SlicePipe
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
