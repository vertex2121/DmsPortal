import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const chartdata = {
      total: [
        [Date.UTC(2017, 6, 19), 52],
        [Date.UTC(2017, 6, 20), 100],
        [Date.UTC(2017, 6, 21), 89],
        [Date.UTC(2017, 6, 22), 78]
      ],
      apr: [
        [(new Date()).getTime()-3000, 52],
        [(new Date()).getTime()-2000, 60],
        [(new Date()).getTime()-1000, 68],
        [(new Date()).getTime(), 60]
      ],
      errors: [
        [Date.UTC(2017, 6, 19), 20],
        [Date.UTC(2017, 6, 20), 25],
        [Date.UTC(2017, 6, 21), 15],
        [Date.UTC(2017, 6, 22), 17]
      ],
      rejects: [
        [Date.UTC(2017, 6, 19), 2],
        [Date.UTC(2017, 6, 20), 5],
        [Date.UTC(2017, 6, 21), 3],
        [Date.UTC(2017, 6, 22), 10]
      ],
      timings: [
        [Date.UTC(2017, 6, 19), 5],
        [Date.UTC(2017, 6, 20), 6],
        [Date.UTC(2017, 6, 21), 7],
        [Date.UTC(2017, 6, 22), 2]
      ]
    };
    return { chartdata };
  }
}
