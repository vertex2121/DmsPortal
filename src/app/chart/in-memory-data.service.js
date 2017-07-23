"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var chartdata = {
            total: [
                [Date.UTC(2017, 7, 19), 52],
                [Date.UTC(2017, 7, 20), 100],
                [Date.UTC(2017, 7, 21), 89],
                [Date.UTC(2017, 7, 22), 78]
            ],
            apr: [
                [Date.UTC(2017, 7, 19), 52],
                [Date.UTC(2017, 7, 20), 60],
                [Date.UTC(2017, 7, 21), 68],
                [Date.UTC(2017, 7, 22), 60]
            ],
            errors: [
                [Date.UTC(2017, 7, 19), 20],
                [Date.UTC(2017, 7, 20), 25],
                [Date.UTC(2017, 7, 21), 15],
                [Date.UTC(2017, 7, 22), 17]
            ],
            rejects: [
                [Date.UTC(2017, 7, 19), 2],
                [Date.UTC(2017, 7, 20), 5],
                [Date.UTC(2017, 7, 21), 3],
                [Date.UTC(2017, 7, 22), 10]
            ],
            timings: [
                [Date.UTC(2017, 7, 19), 5],
                [Date.UTC(2017, 7, 20), 6],
                [Date.UTC(2017, 7, 21), 7],
                [Date.UTC(2017, 7, 22), 2]
            ]
        };
        return { chartdata: chartdata };
    };
    return InMemoryDataService;
}());
InMemoryDataService = __decorate([
    core_1.Injectable()
], InMemoryDataService);
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map