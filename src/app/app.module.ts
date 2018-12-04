import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { VirtualscrollComponent } from './components/virtualscroll/virtualscroll.component';
import { DragdropComponent } from './components/dragdrop/dragdrop.component';
import { PaisesComponent } from './components/paises/paises.component';

@NgModule({
  declarations: [
    AppComponent,
    VirtualscrollComponent,
    DragdropComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
