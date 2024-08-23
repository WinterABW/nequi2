import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataPlanService {
  planes = [
    {
      Plan: 1,
      Inversión: 25000,
      Total: 37222.5,
      Diaria: 1488.9,
      Hora: 62.04,
    },
    {
      Plan: 2,
      Inversión: 30000,
      Total: 44667,
      Diaria: 1786.68,
      Hora: 74.44,
    },
    {
      Plan: 3,
      Inversión: 45000,
      Total: 66000.5,
      Diaria: 2640.02,
      Hora: 110.0,
    },
    {
      Plan: 4,
      Inversión: 60000,
      Total: 89334,
      Diaria: 3573.36,
      Hora: 148.89,
    },
    {
      Plan: 5,
      Inversión: 85000,
      Total: 126556.5,
      Diaria: 5062.26,
      Hora: 210.93,
    },
    {
      Plan: 6,
      Inversión: 100000,
      Total: 148890,
      Diaria: 5955.6,
      Hora: 248.15,
    },
    {
      Plan: 7,
      Inversión: 125000,
      Total: 186112.5,
      Diaria: 7444.5,
      Hora: 310.19,
    },
    {
      Plan: 8,
      Inversión: 150000,
      Total: 223335,
      Diaria: 8933.4,
      Hora: 372.23,
    },
    {
      Plan: 9,
      Inversión: 185000,
      Total: 275446.5,
      Diaria: 11017.86,
      Hora: 459.08,
    },
    {
      Plan: 10,
      Inversión: 230000,
      Total: 342447,
      Diaria: 13697.88,
      Hora: 570.75,
    },
    {
      Plan: 11,
      Inversión: 258000,
      Total: 384106.2,
      Diaria: 15364.25,
      Hora: 640.18,
    },
    {
      Plan: 12,
      Inversión: 300000,
      Total: 446670,
      Diaria: 17866.8,
      Hora: 744.45,
    },
    {
      Plan: 13,
      Inversión: 450000,
      Total: 670005,
      Diaria: 26800.2,
      Hora: 1116.68,
    },
    {
      Plan: 14,
      Inversión: 525000,
      Total: 782672.5,
      Diaria: 31306.9,
      Hora: 1304.45,
    },
    {
      Plan: 15,
      Inversión: 850000,
      Total: 1265565,
      Diaria: 50622.6,
      Hora: 2109.27,
    },
    {
      Plan: 16,
      Inversión: 1000000,
      Total: 1488900,
      Diaria: 59556,
      Hora: 2481.5,
    },
  ];

  constructor() {}

  getPlanes() {
    return this.planes;
  }
}
