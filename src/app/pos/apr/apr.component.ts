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

  chart: any;
  options: any;
  interval: number = 1;
  timer: number;

  createChart(): void {
    this.options = {
      title: { text: 'Уровень одобрения' },
      xAxis: { type: 'datetime' },
      series: []
    };
  }

  private drawChart(): void {
    this.chartDataService.getChartDataApr()
      .then(datastream => {
        this.chart.hideLoading();
        this.chart.addSeries({ data: datastream.apr });
        this.connectChart();
      });
  }

  private connectChart(): void {
    this.timer = this.getTimer();
  }

  refreshTimer(): void {
    clearInterval(this.timer);
    this.timer = this.getTimer();
  }

  private getTimer(): number {
    var context = this;
    return setInterval(function() {
      context.chart.series[0].addPoint(context.chartDataService.getChartDataAprLastMinute(), true, false);
    }, context.interval*60000);
  }

  saveInstance(chartInstance: any) {
    this.chart = chartInstance;
    this.chart.showLoading();
  }

  ngOnInit(): void {
    this.createChart();
    this.drawChart();
  }
}
