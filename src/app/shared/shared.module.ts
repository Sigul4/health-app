import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { MaterialModule } from './modules/material.module';

const imports = [MaterialModule, CommonModule];

@NgModule({
  declarations: [ButtonComponent],
  imports,
  exports: [...imports, ButtonComponent],
})
export class SharedModule {}
