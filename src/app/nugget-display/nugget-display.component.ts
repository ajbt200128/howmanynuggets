import { element } from 'protractor';
import { NuggetSetDisplayComponent } from './../nugget-set-display/nugget-set-display.component';
import { NuggetHelper, NuggetSet } from './../nugget-helper';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/';

@Component({
  selector: 'app-nugget-display',
  templateUrl: './nugget-display.component.html',
  styleUrls: ['./nugget-display.component.css']
})
export class NuggetDisplayComponent implements OnInit {
  @Input() set dollar(val: number) {
    this._dollar = val;
    this.nuggetSets = NuggetHelper.getNuggetDistribution(this._dollar);
    this.nuggetTotal = 0;
    this.dollarLeftover = this._dollar;
    this.nuggetSets.forEach(nuggetSet => {
      this.nuggetTotal += nuggetSet.box.quantity * nuggetSet.amount;
      this.dollarLeftover -= nuggetSet.box.price * nuggetSet.amount;
    });
  }

  private _dollar: number;
  nuggetTotal;
  dollarLeftover;
  nuggetSets: NuggetSet[];
  constructor() { }

  ngOnInit() {
  }
}
