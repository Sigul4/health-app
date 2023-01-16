import { Component, Input, OnInit } from '@angular/core';
import { SelectOption } from 'src/app/constants/select.interface';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() public disabled: boolean;
  @Input() public values: SelectOption[];
  @Input() public isError: boolean;
  @Input() public isPrefix: boolean;
  public selected: string;

  ngOnInit(): void {
    this.values[0] && (this.selected = this.values[0].id);
  }
}
