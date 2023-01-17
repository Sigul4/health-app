import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { BreakerPointService } from 'src/app/services/device-format.service';
import { EColorButton } from 'src/app/shared/components/button/enums/button-style.enums';
import { ESizeButton } from './../../shared/components/button/enums/button-style.enums';

@Component({
  selector: 'app-header-element',
  templateUrl: './header-element.component.html',
  styleUrls: ['./header-element.component.scss'],
})
export class HeaderElementComponent implements OnInit, OnDestroy {
  @Input() public isLogin: boolean = true;
  public Tablet: boolean;
  public buttonColor = EColorButton;
  public buttonSize = ESizeButton;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private brakePointService: BreakerPointService) {}

  ngOnInit(): void {
    this.setBreakpoints();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public setBreakpoints(): void {
    this.brakePointService.mobileFormat
      .pipe(takeUntil(this.destroy$))
      .subscribe((Mobile: boolean) => (this.Tablet = !Mobile));
  }
}
