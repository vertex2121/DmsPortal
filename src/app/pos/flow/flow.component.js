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
var FlowComponent = (function () {
    function FlowComponent(chartDataService) {
        this.chartDataService = chartDataService;
    }
    FlowComponent.prototype.createChart = function () {
        var _this = this;
        this.chartDataService.getChartDataTotal()
            .then(function (data) { return _this.buildChart(data.total); });
    };
    FlowComponent.prototype.buildChart = function (dataStream) {
        this.options = {
            title: { text: 'Уровень одобрения' },
            xAxis: {
                type: 'datetime'
            },
            series: [{
                    data: dataStream,
                }]
        };
    };
    FlowComponent.prototype.ngOnInit = function () {
        this.createChart();
    };
    return FlowComponent;
}());
FlowComponent = __decorate([
    core_1.Component({
        selector: 'flow',
        templateUrl: './flow.component.html',
        styles: ["chart {\n    display: block;\n}"]
    }),
    __metadata("design:paramtypes", [chart_data_service_1.ChartDataService])
], FlowComponent);
exports.FlowComponent = FlowComponent;
//# sourceMappingURL=flow.component.js.map