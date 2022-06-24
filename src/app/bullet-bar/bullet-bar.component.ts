import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-bullet-bar',
  templateUrl: './bullet-bar.component.html',
  styleUrls: ['./bullet-bar.component.scss'],
})
export class BulletBarComponent implements OnChanges {
  private _filledBar: number = 100;
  @Input('filledBar') set filledBar(value: number) {
    this._filledBar = value;
    if (this._filledBar > this.totalBar) {
      this._filledBar = this.totalBar;
    }
  }
  get filledBar(): number {
    return this._filledBar;
  }
  private _lineTendency: number | undefined = 10;
  @Input('lineTendency') set lineTendency(value: number | undefined) {
    this._lineTendency = value;
    if (this._lineTendency && this._lineTendency > this.totalBar) {
      this._lineTendency = this.totalBar;
    }
  }
  get lineTendency(): number | undefined {
    return this._lineTendency;
  }
  @Input() totalBar: number = 100;
  @Input() filledColor: string | undefined = '#1a73e8';
  @Input() tendency: boolean = false;
  @Input() tendencyPerc: boolean | undefined = false;
  @Input() tendencyText: string | undefined = '';
  @Input() textColor: string | undefined = '#FFFFFF';
  @Input() textAssessment : string | undefined = '';
  @Input() textOrientation : 'inside' | 'outside' | 'none' = 'inside';
  @Input() graphCount : number = 0;
  filledPerc: number = 0;
  linePerc: number = 0;
  linePercNoDec: number = 0;
  isLineOnHover: boolean = false;
  isBarOnHover: boolean = false;

  constructor() {}

  ngOnChanges(): void {
    if (this.lineTendency) {
      this.filledPerc = (this.filledBar / this.totalBar) * 100;
      this.filledBar = Math.round(this.filledBar * 10) / 10;
      this.lineTendency = Math.round(this.lineTendency * 10) / 10;
      this.linePerc = (this.lineTendency / this.totalBar) * 100;
      this.linePercNoDec = Math.round(this.linePerc * 10) / 10;
    } else {
      this.filledPerc = (this.filledBar / this.totalBar) * 100;
      this.filledBar = Math.round(this.filledBar * 10) / 10;
    }
  }
}
