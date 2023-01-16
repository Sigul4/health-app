import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ButtonComponent } from './components/button/button.component';

const imports = [CommonModule, MatListModule, MatIconModule];

@NgModule({
  declarations: [ButtonComponent],
  imports,
  exports: [...imports, ButtonComponent],
})
export class SharedModule {}
