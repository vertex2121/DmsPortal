"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var angular2_highcharts_1 = require("angular2-highcharts");
var HighchartsService_1 = require("angular2-highcharts/dist/HighchartsService");
var highcharts = require("highcharts");
var pos_component_1 = require("./pos/pos.component");
var notFound_component_1 = require("./404/notFound.component");
var flow_component_1 = require("./pos/flow/flow.component");
var overview_component_1 = require("./pos/overview/overview.component");
var navbar_component_1 = require("./navbar/navbar.component");
var menu_component_1 = require("./pos/menu/menu.component");
var home_component_1 = require("./home/home.component");
var rejects_component_1 = require("./pos/rejects/rejects.component");
var errors_component_1 = require("./pos/errors/errors.component");
var apr_component_1 = require("./pos/apr/apr.component");
var timings_component_1 = require("./pos/timings/timings.component");
var chart_data_service_1 = require("./chart/chart-data.service");
var in_memory_data_service_1 = require("./chart/in-memory-data.service");
//import { HomeComponent } from './home/home.component';
function highchartsFactory() {
    return highcharts;
}
exports.highchartsFactory = highchartsFactory;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.HttpModule,
            platform_browser_1.BrowserModule,
            angular2_highcharts_1.ChartModule,
            app_routing_module_1.AppRoutingModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
        ],
        declarations: [
            pos_component_1.PosComponent,
            notFound_component_1.PageNotFoundComponent,
            flow_component_1.FlowComponent,
            overview_component_1.OverviewComponent,
            navbar_component_1.NavbarComponent,
            menu_component_1.MenuComponent,
            home_component_1.HomeComponent,
            app_component_1.AppComponent,
            rejects_component_1.RejectsComponent,
            errors_component_1.ErrorsComponent,
            apr_component_1.AprComponent,
            timings_component_1.TimingsComponent
        ],
        providers: [
            chart_data_service_1.ChartDataService,
            {
                provide: HighchartsService_1.HighchartsStatic,
                useFactory: highchartsFactory
            }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map