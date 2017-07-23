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
var ErrorsComponent = (function () {
    function ErrorsComponent(chartDataService) {
        this.chartDataService = chartDataService;
    }
    ErrorsComponent.prototype.createChart = function () {
        var _this = this;
        this.chartDataService.getChartDataErrors()
            .then(function (data) { return _this.buildChart(data.errors); });
    };
    ErrorsComponent.prototype.buildChart = function (dataStream) {
        this.options = {
            title: { text: 'Колличество ошибок' },
            xAxis: {
                type: 'datetime'
            },
            series: [{
                    data: dataStream,
                }]
        };
    };
    ErrorsComponent.prototype.ngOnInit = function () {
        this.createChart();
    };
    return ErrorsComponent;
}());
ErrorsComponent = __decorate([
    core_1.Component({
        selector: 'errors',
        templateUrl: './errors.component.html',
        styles: ["chart {\n    display: block;\n}"]
    }),
    __metadata("design:paramtypes", [chart_data_service_1.ChartDataService])
], ErrorsComponent);
exports.ErrorsComponent = ErrorsComponent;
//# sourceMappingURL=errors.component.js.map