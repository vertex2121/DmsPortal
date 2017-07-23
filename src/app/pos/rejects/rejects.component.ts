import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rejects',
  templateUrl: './rejects.component.html',
  styles: [`chart {
    display: block;
}`]
})
export class RejectsComponent implements OnInit {
  constructor() {
        this.options = {
            title : { text : 'Причины отказов' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2],
            }]
        };
    }
    options: Object;
  ngOnInit() {}
}
