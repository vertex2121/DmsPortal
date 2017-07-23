import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'errors',
  templateUrl: './errors.component.html',
  styles: [`chart {
    display: block;
}`]
})
export class ErrorsComponent implements OnInit {
  constructor() {
        this.options = {
            title : { text : 'Количество ошибок' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2],
            }]
        };
    }
    options: Object;
  ngOnInit() {}
}
