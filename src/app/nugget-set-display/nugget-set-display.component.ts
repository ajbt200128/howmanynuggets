import { NuggetHelper, NuggetSet, NuggetVarieties } from './../nugget-helper';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-nugget-set-display',
  templateUrl: './nugget-set-display.component.html',
  styleUrls: ['./nugget-set-display.component.css']
})
export class NuggetSetDisplayComponent implements OnInit {
  @Input() set nuggetSet(nuggetSet: NuggetSet) {
    this._nuggetSet = nuggetSet;
    switch (this._nuggetSet.box.name) {
      case NuggetVarieties.FOURPIECE.name:
      this.imgLink = 'http://3.bp.blogspot.com/-RHHe_EEwdz0/T1AM0O8MWiI/AAAAAAAACLE/Mhxf_nsji2E/s1600/four-piece-McNugget.jpg'; break;
      case NuggetVarieties.SIXPIECE.name:
      this.imgLink = 'http://faithfulsaver.com/wp-content/uploads/2017/06/mcnuggets.jpg'; break;
      case NuggetVarieties.TENPIECE.name:
      this.imgLink = 'https://assets.rbl.ms/16851692/980x.jpg'; break;
      case NuggetVarieties.TWENTYPIECE.name:
      this.imgLink = 'https://www.manilaonsale.com/wp-content/uploads/2017/10/nuggets.jpg'; break;
    }
  }
  _nuggetSet: NuggetSet;
  nuggetHelper = new NuggetHelper();
  imgLink;
  constructor() { }

  ngOnInit() {

  }


}
