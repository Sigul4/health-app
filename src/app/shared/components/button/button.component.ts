import { Component, Input } from '@angular/core';
import {
  EColorButton,
  ESizeButton,
} from 'src/app/shared/components/button/enums/button-style.enums';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() public isFullWidth: boolean = false;
  @Input() public text: string;
  @Input() public btnSize: ESizeButton;
  @Input() public color: EColorButton;
  @Input() public icon: string;
}
