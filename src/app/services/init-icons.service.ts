import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ICONS, ICON_PATH } from '../constants/icon.constant';

@Injectable()
export class InitIconsService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  public initIcons(): () => Promise<void> {
    return (): Promise<void> => {
      ICONS.forEach((ICON: string) => {
        this.iconRegistry.addSvgIcon(
          ICON,
          this.sanitizer.bypassSecurityTrustResourceUrl(
            `${ICON_PATH + ICON}.svg`
          )
        );
      });
      return Promise.resolve();
    };
  }
}
