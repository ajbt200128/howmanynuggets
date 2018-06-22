import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dollarinput',
  templateUrl: './dollarinput.component.html',
  styleUrls: ['./dollarinput.component.css']
})
export class DollarinputComponent implements OnInit {
   @Output() emitter: EventEmitter<number> = new EventEmitter<number>();
   dollar = 0;
  constructor() { }
  ngOnInit() {
  }
  change() {
    this.emitter.emit(this.dollar);
  }
  getWidth(): string {
    let num = this.dollar.toString().length * 19.0 + 12;
    num = num < 35 ? 35 : num;
    return num + 'pt';
  }
}
