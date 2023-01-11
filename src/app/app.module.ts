import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconService } from './services/app-icon.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatIconModule],
  providers: [
    IconService,
    {
      provide: APP_INITIALIZER,
      useFactory: (iconService: IconService) => iconService.initIcons(),
      deps: [IconService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
