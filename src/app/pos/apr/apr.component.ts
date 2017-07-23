import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apr',
  templateUrl: './apr.component.html',
  styles: [`chart {
    display: block;
}`]
})
export class AprComponent implements OnInit {
  constructor() {
        this.options = {
            title : { text : 'Уровень одобрения' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2],
            }]
        };
    }
    options: Object;
  ngOnInit() {}
}
