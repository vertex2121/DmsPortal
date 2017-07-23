"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var pos_component_1 = require("./pos/pos.component");
//import {PageNotFoundComponent} from './404/notFound.component';
var flow_component_1 = require("./pos/flow/flow.component");
var overview_component_1 = require("./pos/overview/overview.component");
var home_component_1 = require("./home/home.component");
var rejects_component_1 = require("./pos/rejects/rejects.component");
var errors_component_1 = require("./pos/errors/errors.component");
var apr_component_1 = require("./pos/apr/apr.component");
var timings_component_1 = require("./pos/timings/timings.component");
var appRoutes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'dashboard',
        component: app_component_1.AppComponent,
        children: [
            {
                path: 'pos',
                component: pos_component_1.PosComponent,
                children: [
                    {
                        path: 'overview',
                        component: overview_component_1.OverviewComponent,
                    },
                    {
                        path: 'flow',
                        component: flow_component_1.FlowComponent,
                    },
                    {
                        path: 'rejects',
                        component: rejects_component_1.RejectsComponent,
                    },
                    {
                        path: 'errors',
                        component: errors_component_1.ErrorsComponent,
                    },
                    {
                        path: 'timing',
                        component: timings_component_1.TimingsComponent,
                    },
                    {
                        path: 'apr',
                        component: apr_component_1.AprComponent,
                    },
                ]
            },
            {
                path: 'cash',
                component: pos_component_1.PosComponent
            },
            {
                path: 'card',
                component: pos_component_1.PosComponent
            },
            {
                path: 'xsell',
                component: pos_component_1.PosComponent
            },
        ],
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(appRoutes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map