import { Component, OnInit } from '@angular/core';
import {ChartDataService} from '../../chart/chart-data.service';

@Component({
  selector: 'apr',
  templateUrl: './apr.component.html',
  styles: [`chart {
    display: block;
    }`
  ]
})
export class AprComponent implements OnInit {
  constructor(private chartDataService: ChartDataService) { }

  options: Object;

  createChart(): void {
    this.chartDataService.getChartDataApr()
      .then(data => this.buildChart(data.apr));
  }

  private buildChart(dataStream: any): void {
    this.options = {
      title: { text: 'Уровень одобрения' },
      xAxis: {
        type: 'datetime'
      },
      series: [{
        data: dataStream,
      }]
    };
  }

  ngOnInit(): void {
    this.createChart();
  }
}
