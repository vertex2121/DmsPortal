import { Component, OnInit } from '@angular/core';
import {ChartDataService} from '../../chart/chart-data.service';

@Component({
  selector: 'flow',
  templateUrl: './flow.component.html',
  styles: [`chart {
    display: block;
}`]
})
export class FlowComponent {
  constructor(private chartDataService: ChartDataService) { }

  options: Object;

  createChart(): void {
    this.chartDataService.getChartDataTotal()
      .then(data => this.buildChart(data.total));
  }

  private buildChart(dataStream: any): void {
    this.options = {
      title: { text: 'Количество заявок' },
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
