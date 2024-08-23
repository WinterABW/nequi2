import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataPlanService {
 
    planes= [
      {
        Plan: 1,
        Inversión: 25000,
        'Ganancia Total': 37222.5,
        'Ganancia Diaria': 1488.9,
        'Ganancia por Hora': 62.04,
      },
      {
        Plan: 2,
        Inversión: 30000,
        'Ganancia Total': 44667,
        'Ganancia Diaria': 1786.68,
        'Ganancia por Hora': 74.44,
      },
      {
        Plan: 3,
        Inversión: 45000,
        'Ganancia Total': 66000.5,
        'Ganancia Diaria': 2640.02,
        'Ganancia por Hora': 110.0,
      },
      {
        Plan: 4,
        Inversión: 60000,
        'Ganancia Total': 89334,
        'Ganancia Diaria': 3573.36,
        'Ganancia por Hora': 148.89,
      },
      {
        Plan: 5,
        Inversión: 85000,
        'Ganancia Total': 126556.5,
        'Ganancia Diaria': 5062.26,
        'Ganancia por Hora': 210.93,
      },
      {
        Plan: 6,
        Inversión: 100000,
        'Ganancia Total': 148890,
        'Ganancia Diaria': 5955.6,
        'Ganancia por Hora': 248.15,
      },
      {
        Plan: 7,
        Inversión: 125000,
        'Ganancia Total': 186112.5,
        'Ganancia Diaria': 7444.5,
        'Ganancia por Hora': 310.19,
      },
      {
        Plan: 8,
        Inversión: 150000,
        'Ganancia Total': 223335,
        'Ganancia Diaria': 8933.4,
        'Ganancia por Hora': 372.23,
      },
      {
        Plan: 9,
        Inversión: 185000,
        'Ganancia Total': 275446.5,
        'Ganancia Diaria': 11017.86,
        'Ganancia por Hora': 459.08,
      },
      {
        Plan: 10,
        Inversión: 230000,
        'Ganancia Total': 342447,
        'Ganancia Diaria': 13697.88,
        'Ganancia por Hora': 570.75,
      },
      {
        Plan: 11,
        Inversión: 258000,
        'Ganancia Total': 384106.2,
        'Ganancia Diaria': 15364.25,
        'Ganancia por Hora': 640.18,
      },
      {
        Plan: 12,
        Inversión: 300000,
        'Ganancia Total': 446670,
        'Ganancia Diaria': 17866.8,
        'Ganancia por Hora': 744.45,
      },
      {
        Plan: 13,
        Inversión: 450000,
        'Ganancia Total': 670005,
        'Ganancia Diaria': 26800.2,
        'Ganancia por Hora': 1116.68,
      },
      {
        Plan: 14,
        Inversión: 525000,
        'Ganancia Total': 782672.5,
        'Ganancia Diaria': 31306.9,
        'Ganancia por Hora': 1304.45,
      },
      {
        Plan: 15,
        Inversión: 850000,
        'Ganancia Total': 1265565,
        'Ganancia Diaria': 50622.6,
        'Ganancia por Hora': 2109.27,
      },
      {
        Plan: 16,
        Inversión: 1000000,
        'Ganancia Total': 1488900,
        'Ganancia Diaria': 59556,
        'Ganancia por Hora': 2481.5,
      },
    ]
  

  constructor() {}


  getPlanes() {
    return this.planes;
  }
}
