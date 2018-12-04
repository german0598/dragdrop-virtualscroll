import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: "app-virtualscroll",
  templateUrl: "./virtualscroll.component.html",
  styleUrls: ["./virtualscroll.component.css"]
})
export class VirtualscrollComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  personas = Array(1000).fill(0);

  constructor() {}

  ngOnInit() {
    console.log(this.personas);
  }

  irFinal() {
    this.viewport.scrollToIndex( this.personas.length );
  }

  irInicio() {
    this.viewport.scrollToIndex(0);
  }

  irMitad() {
    this.viewport.scrollToIndex( this.personas.length / 2 );
  }
}
