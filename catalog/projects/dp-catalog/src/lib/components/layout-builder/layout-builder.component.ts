import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'lib-layout-builder',
  templateUrl: './layout-builder.component.html',
  styleUrls: ['./layout-builder.component.css']
})
export class LayoutBuilderComponent extends BaseComponent {

  constructor() {
    super();
   }

   async ngOnInit() {
    super.ngOnInit();
    this.documentData?.rows.sort(this.compare);

    for(let row of this.documentData?.rows) {
      row.columns.sort(this.compare);
    }
   }

   compare( a, b ) {
    if ( a.order < b.order ){
      return -1;
    }
    if ( a.order > b.order ){
      return 1;
    }
    return 0;
  }

}
