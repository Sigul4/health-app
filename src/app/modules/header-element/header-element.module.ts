import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { HeaderElementComponent } from './header-element.component';

@NgModule({
  declarations: [ButtonComponent, HeaderElementComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
  ],
  exports: [HeaderElementComponent],
})
export class HeaderElementModule {}
