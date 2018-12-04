import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: "app-paises",
  templateUrl: "./paises.component.html",
  styleUrls: ["./paises.component.css"]
})
export class PaisesComponent implements OnInit {
  paises: any[];

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._http
      .get("https://restcountries.eu/rest/v2/lang/es")
      .subscribe((paises: any) => (this.paises = paises));
  }

  drop( evento: CdkDragDrop<any> ) {
    // console.log('ok: ', evento);
    moveItemInArray( this.paises, evento.previousIndex, evento.currentIndex );
    console.log(this.paises);
  }
}
