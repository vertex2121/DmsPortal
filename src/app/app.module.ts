import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms'
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
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
import {ChartDataService} from './chart/chart-data.service';
import {InMemoryDataService} from './chart/in-memory-data.service';

//import { HomeComponent } from './home/home.component';

export function highchartsFactory() {
  return highcharts;
}

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    ChartModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 2000 }),
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
  providers: [
    ChartDataService,
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
