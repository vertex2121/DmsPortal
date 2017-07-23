import { Component, OnInit } from '@angular/core';
import {ChartDataService} from '../../chart/chart-data.service';

@Component({
  selector: 'rejects',
  templateUrl: './rejects.component.html',
  styles: [`chart {
    display: block;
}`]
})
export class RejectsComponent implements OnInit {
  constructor(private chartDataService: ChartDataService) { }

  options: Object;

  createChart(): void {
    this.chartDataService.getChartDataRejects()
      .then(data => this.buildChart(data.rejects));
  }

  private buildChart(dataStream: any): void {
    this.options = {
      title: { text: 'Причины отказов' },
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
