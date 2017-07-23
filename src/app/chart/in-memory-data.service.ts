import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const chartdata = {
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
    return { chartdata };
  }
}
