import { ChangeDetectorRef, Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'lib-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.css']
})
export class TeaserComponent extends BaseComponent {

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

  updateModel(data) {
    super.updateModel(data);
    this.cdr.detectChanges();
  }

}
