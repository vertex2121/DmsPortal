import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {PosComponent} from './pos/pos.component';
//import {PageNotFoundComponent} from './404/notFound.component';
import {FlowComponent} from './pos/flow/flow.component';
import {OverviewComponent} from './pos/overview/overview.component';
import {HomeComponent} from './home/home.component';
import {RejectsComponent} from './pos/rejects/rejects.component';
import {ErrorsComponent} from './pos/errors/errors.component';
import {AprComponent} from './pos/apr/apr.component';
import {TimingsComponent} from './pos/timings/timings.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: AppComponent,
    children: [
      {
        path: 'pos',
        component: PosComponent,
        children: [
          {
            path: 'overview',
            component: OverviewComponent,
          },
          {
            path: 'flow',
            component: FlowComponent,
          },
          {
            path: 'rejects',
            component: RejectsComponent,
          },
          {
            path: 'errors',
            component: ErrorsComponent,
          },
          {
            path: 'timing',
            component: TimingsComponent,
          },
          {
            path: 'apr',
            component: AprComponent,
          },
        ]
      },
      {
        path: 'cash',
        component: PosComponent
      },
      {
        path: 'card',
        component: PosComponent
      },
      {
        path: 'xsell',
        component: PosComponent
      },
    ],
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
