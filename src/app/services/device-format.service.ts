import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BreakerPointService {
  constructor(public breakpointObserver: BreakpointObserver) {}

  public mobileFormat = this.breakpointObserver
    .observe([Breakpoints.XSmall])
    .pipe(map(({ matches }) => matches));
}
