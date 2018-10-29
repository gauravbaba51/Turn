import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { DraggebleDirective } from './draggeble/draggeble.directive';


import {  DropZoneDirective } from './droeble/drop-zon.directive';
import { DraggableHelperDirective } from './draggeble/drageble.help.directive';
import { OverlayModule } from '@angular/cdk/overlay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DroppableService } from './droeble/dropeble.service';
import { DroppableDirective } from './droeble/dropeble.directive';
import { ExcelService } from './excel.service';

@NgModule({
  declarations: [
    AppComponent,
    DroppableDirective ,
    DraggebleDirective,
DraggableHelperDirective,
 DropZoneDirective  
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    OverlayModule,
     
   

  ],
  providers: [DroppableService,ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
