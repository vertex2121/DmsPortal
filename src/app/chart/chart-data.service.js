"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var ChartDataService = (function () {
    function ChartDataService(http) {
        this.http = http;
        this.chartDataRejectsUrl = 'api/chartdata';
        this.chartDataTotalUrl = 'api/chartdata';
        this.chartDataTimingsUrl = 'api/chartdata';
        this.chartDataErrorsUrl = 'api/chartdata';
        this.chartDataAprUrl = 'api/chartdata';
    }
    ChartDataService.prototype.getChartDataRejects = function () {
        return this.getChartData(this.chartDataRejectsUrl);
    };
    ChartDataService.prototype.getChartDataTotal = function () {
        return this.getChartData(this.chartDataTotalUrl);
    };
    ChartDataService.prototype.getChartDataTimings = function () {
        return this.getChartData(this.chartDataTimingsUrl);
    };
    ChartDataService.prototype.getChartDataErrors = function () {
        return this.getChartData(this.chartDataErrorsUrl);
    };
    ChartDataService.prototype.getChartDataApr = function () {
        return this.getChartData(this.chartDataAprUrl);
    };
    ChartDataService.prototype.getChartDataAprLastMinute = function () {
        return this.generateRandomSeria();
        //new Promise(this.generateRandomSeria)
    };
    ChartDataService.prototype.generateRandomSeria = function () {
        return [(new Date()).getTime(), Math.round(Math.random() * 100)];
    };
    ChartDataService.prototype.getChartData = function (url) {
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ChartDataService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ChartDataService;
}());
ChartDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ChartDataService);
exports.ChartDataService = ChartDataService;
//# sourceMappingURL=chart-data.service.js.map