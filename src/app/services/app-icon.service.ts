import { EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ICONS, ICON_PATH } from '../constants/icon.constant';

@Injectable({ providedIn: 'root' })
export class IconService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  public initIcons(): () => Promise<any> {
    return (): Promise<any> =>
      new Promise((resolve: (value: any) => void): void => {
        ICONS.forEach((ICON: string) => {
          this.iconRegistry.addSvgIcon(
            ICON,
            this.sanitizer.bypassSecurityTrustResourceUrl(
              `${ICON_PATH + ICON}.svg`
            )
          );
        });
        resolve(EMPTY);
      });
  }
}
