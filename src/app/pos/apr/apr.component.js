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
var chart_data_service_1 = require("../../chart/chart-data.service");
var AprComponent = (function () {
    function AprComponent(chartDataService) {
        this.chartDataService = chartDataService;
        this.interval = 1;
    }
    AprComponent.prototype.createChart = function () {
        this.options = {
            title: { text: 'Уровень одобрения' },
            xAxis: { type: 'datetime' },
            series: []
        };
    };
    AprComponent.prototype.drawChart = function () {
        var _this = this;
        this.chartDataService.getChartDataApr()
            .then(function (datastream) {
            _this.chart.hideLoading();
            _this.chart.addSeries({ data: datastream.apr });
            _this.connectChart();
        });
    };
    AprComponent.prototype.connectChart = function () {
        this.timer = this.getTimer();
    };
    AprComponent.prototype.refreshTimer = function () {
        clearInterval(this.timer);
        this.timer = this.getTimer();
    };
    AprComponent.prototype.getTimer = function () {
        var context = this;
        return setInterval(function () {
            context.chart.series[0].addPoint(context.chartDataService.getChartDataAprLastMinute(), true, false);
        }, context.interval * 60000);
    };
    AprComponent.prototype.saveInstance = function (chartInstance) {
        this.chart = chartInstance;
        this.chart.showLoading();
    };
    AprComponent.prototype.ngOnInit = function () {
        this.createChart();
        this.drawChart();
    };
    return AprComponent;
}());
AprComponent = __decorate([
    core_1.Component({
        selector: 'apr',
        templateUrl: './apr.component.html',
        styles: ["chart {\n    display: block;\n    }"
        ]
    }),
    __metadata("design:paramtypes", [chart_data_service_1.ChartDataService])
], AprComponent);
exports.AprComponent = AprComponent;
//# sourceMappingURL=apr.component.js.map