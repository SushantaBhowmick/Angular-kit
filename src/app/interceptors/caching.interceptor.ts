import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { finalize, Observable, of, shareReplay, tap } from 'rxjs';
import { CacheService } from '../services/cache/cache.service';

// const cache = new Map<string, HttpEvent<unknown>>();

export const cachingInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {

  const cache = inject(CacheService);

  if (!isCachable(req)) {
    return next(req);
  }
  const cachedResponse = cache.getCache(req.url);
  if (cachedResponse) {
    // If the response is found in the cache, return it
    return of(cachedResponse).pipe(
      tap(() => console.log('--- Cached ---',cachedResponse))
    );
  }

  // If no cached response, send a new request
  return sendNewRequest(req, next, cache);
};
  function isCachable(req: HttpRequest<any>): boolean {
    return req.method === 'GET';
  }

  function sendNewRequest(req: HttpRequest<any>, next: any, cache: CacheService) {
    return next(req).pipe(
      tap((event: HttpEvent<any>) => cache.setCache(req.url, event, new Date()))
    );
  }

