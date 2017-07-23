import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PosComponent} from './dashboard/pos/pos.component';
//import {PageNotFoundComponent} from './404/notFound.component';
import {FlowComponent} from './dashboard/pos/flow/flow.component';
import {OverviewComponent} from './dashboard/pos/overview/overview.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'dashboard/pos',
    component: OverviewComponent
  },
  {
    path: 'dashboard/cash',
    component: OverviewComponent
  },
  {
    path: 'dashboard/card',
    component: OverviewComponent
  },
  {
    path: 'dashboard/xsell',
    component: OverviewComponent
  },
  {
    path: 'dashboard/pos/overview',
    component: OverviewComponent
  },
  {
    path: 'dashboard/pos/flow',
    component: FlowComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
//  {
//    path: '**',
//    component: PageNotFoundComponent
//  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
