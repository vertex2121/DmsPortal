import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {ChartData} from './chart-data';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChartDataService {
  private chartDataRejectsUrl = 'api/chartdata';
  private chartDataTotalUrl = 'api/chartdata';
  private chartDataTimingsUrl = 'api/chartdata';
  private chartDataErrorsUrl = 'api/chartdata';
  private chartDataAprUrl = 'api/chartdata';

  constructor(private http: Http) { }

  getChartDataRejects(): Promise<any> {
    return this.getChartData(this.chartDataRejectsUrl);
  }

  getChartDataTotal(): Promise<any> {
    return this.getChartData(this.chartDataTotalUrl);
  }

  getChartDataTimings(): Promise<any> {
    return this.getChartData(this.chartDataTimingsUrl);
  }

  getChartDataErrors(): Promise<any> {
    return this.getChartData(this.chartDataErrorsUrl);
  }

  getChartDataApr(): Promise<any> {
    return this.getChartData(this.chartDataAprUrl);
  }

  getChartDataAprLastMinute(): [number, number] {
    return this.generateRandomSeria();
    //new Promise(this.generateRandomSeria)
  }

  private generateRandomSeria(): [number, number] {
    return [(new Date()).getTime(), Math.round(Math.random() * 100)];
  }

  private getChartData(url: string): Promise<any> {
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
