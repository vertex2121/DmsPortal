import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts';
import {PosComponent} from './pos/pos.component';
import {PageNotFoundComponent} from './404/notFound.component';
import {FlowComponent} from './pos/flow/flow.component';
import {OverviewComponent} from './pos/overview/overview.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MenuComponent} from './pos/menu/menu.component';
import {HomeComponent} from './home/home.component';
import {RejectsComponent} from './pos/rejects/rejects.component';
import {ErrorsComponent} from './pos/errors/errors.component';
import {AprComponent} from './pos/apr/apr.component';
import {TimingsComponent} from './pos/timings/timings.component';

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
    PosComponent,
    PageNotFoundComponent,
    FlowComponent,
    OverviewComponent,
    NavbarComponent,
    MenuComponent,
    HomeComponent,
    AppComponent,
    RejectsComponent,
    ErrorsComponent,
    AprComponent,
    TimingsComponent
  ],
  providers: [{
    provide: HighchartsStatic,
    useFactory: highchartsFactory
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
