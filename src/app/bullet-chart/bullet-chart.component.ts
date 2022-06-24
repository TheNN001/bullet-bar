import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { bullet } from '../bullet';

@Component({
  selector: 'app-bullet-chart',
  templateUrl: './bullet-chart.component.html',
  styleUrls: ['./bullet-chart.component.scss']
})
export class BulletChartComponent implements OnChanges{
  @Input() tendency : boolean = false;
  @Input() tendencyPerc: boolean | undefined = false;
  @Input() percRange : boolean | undefined = false;
  @Input() dataArray : Array<bullet> | undefined;
  @Input() dataSingle : bullet | undefined;
  @Input() textOrientation : 'inside' | 'outside' | 'none' = 'inside';
  @Input() percDivider : number = 6;
  percMulti : number = 0;

  counter(i: number) {
    return new Array(i);
  }

  ngOnChanges(): void {
    this.percMulti = Math.trunc(100 / (this.percDivider - 1))
  }
}
