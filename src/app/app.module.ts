import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts';
import { DashboardComponent } from './dashboard/dashboard.component';
import {PosComponent} from './dashboard/pos/pos.component';
import {PageNotFoundComponent} from './404/notFound.component';
import {FlowComponent} from './dashboard/pos/flow/flow.component';
import {OverviewComponent} from './dashboard/pos/overview/overview.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MenuComponent} from './dashboard/pos/menu/menu.component';
import {HomeComponent} from './home/home.component';

//import { HomeComponent } from './home/home.component';

export function highchartsFactory() {
  return highcharts;
}

@NgModule({
  imports: [
    BrowserModule,
    ChartModule,
    AppRoutingModule
  ],
  declarations: [
    DashboardComponent,
    PosComponent,
    PageNotFoundComponent,
    FlowComponent,
    OverviewComponent,
    NavbarComponent,
    MenuComponent,
    HomeComponent,
    AppComponent
  ],
  providers: [{
    provide: HighchartsStatic,
    useFactory: highchartsFactory
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
