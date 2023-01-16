import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() public placeholder: string;
  @Input() public mask: string;
  @Input() public disabled: boolean;
  @Input() public hide: boolean = false;
  @Input() public isHideDeclared: boolean;
  @Input() public isError: boolean;

  public value: string;

  ngOnInit(): void {
    this.isHideDeclared = this.hide;
  }
}
