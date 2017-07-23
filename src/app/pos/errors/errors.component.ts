import { Component, OnInit } from '@angular/core';
import {ChartDataService} from '../../chart/chart-data.service';

@Component({
  selector: 'errors',
  templateUrl: './errors.component.html',
  styles: [`chart {
    display: block;
}`]
})
export class ErrorsComponent implements OnInit {
  constructor(private chartDataService: ChartDataService) { }

  options: Object;

  createChart(): void {
    this.chartDataService.getChartDataErrors()
      .then(data => this.buildChart(data.errors));
  }

  private buildChart(dataStream: any): void {
    this.options = {
      title: { text: 'Колличество ошибок' },
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
