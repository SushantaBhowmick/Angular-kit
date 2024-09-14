import { HttpEvent } from '@angular/common/http';
import { Injectable,  } from '@angular/core';

export interface ICacheService {
  get(url: string): any | null;
  set(url: string, response: any): void;
}


@Injectable({
  providedIn: 'root'
})
export class CacheService {
  cache = new Map();
  expiry: number = 20000; // 20sec

  constructor() {}

  getCache(url: string): HttpEvent<any> | undefined {
    let result = this.cache.get(url);

    if (!result) {
      return undefined;
    }

    let response: HttpEvent<any> = result.response;
    let resDate: Date = result.date;

    if (Date.now() - resDate.getTime() > this.expiry) {
      this.deleteCache(url);
      return undefined;
    }

    return response;
  }

  setCache(url: string, response: HttpEvent<any>, date: Date): void {
    this.cache.set(url, { response, date });
  }

  deleteCache(url: string): void {
    this.cache.delete(url);
  }
}
