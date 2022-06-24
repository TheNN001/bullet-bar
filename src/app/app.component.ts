import { Component, Input } from '@angular/core';
import { bullet } from './bullet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  examplArray : Array<bullet> = [
    {
      id: 1,
      textAssessment : 'Contenido',
      totalBar : 100,
      filledBar : 60,
      lineTendency : 66,
      tendencyText : 'Tendencia',
      color : '#34a853'
    }
  ]
}
