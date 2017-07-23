import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'timings',
  templateUrl: './timings.component.html',
  styles: [`chart {
    display: block;
}`]
})
export class TimingsComponent implements OnInit {
  constructor() {
        this.options = {
            title : { text : 'Длительность обработки заявок' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2],
            }]
        };
    }
    options: Object;
  ngOnInit() {}
}
