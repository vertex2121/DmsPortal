import { Component, OnInit } from '@angular/core';
import {ChartDataService} from '../../chart/chart-data.service';

@Component({
  selector: 'timings',
  templateUrl: './timings.component.html',
  styles: [`chart {
    display: block;
}`]
})
export class TimingsComponent implements OnInit {
  constructor(private chartDataService: ChartDataService) { }

  options: Object;

  createChart(): void {
    this.chartDataService.getChartDataTimings()
      .then(data => this.buildChart(data.timings));
  }

  private buildChart(dataStream: any): void {
    this.options = {
      title: { text: 'Время обработки заявок' },
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
