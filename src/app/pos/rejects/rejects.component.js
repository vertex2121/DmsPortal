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
var RejectsComponent = (function () {
    function RejectsComponent() {
        this.options = {
            title: { text: 'Причины отказов' },
            series: [{
                    data: [29.9, 71.5, 106.4, 129.2],
                }]
        };
    }
    RejectsComponent.prototype.ngOnInit = function () { };
    return RejectsComponent;
}());
RejectsComponent = __decorate([
    core_1.Component({
        selector: 'rejects',
        templateUrl: './rejects.component.html',
        styles: ["chart {\n    display: block;\n}"]
    }),
    __metadata("design:paramtypes", [])
], RejectsComponent);
exports.RejectsComponent = RejectsComponent;
//# sourceMappingURL=rejects.component.js.map