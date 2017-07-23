import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flow',
  templateUrl: './flow.component.html',
  styles: [`chart {
    display: block;
}`]
})
export class FlowComponent {
  constructor() {
        this.options = {
            title : { text : 'simple chart' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2],
            }]
        };
    }
    options: Object;
}
