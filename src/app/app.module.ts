import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitIconsService } from './services/init-icons.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule,
  ],
  providers: [
    InitIconsService,
    {
      provide: APP_INITIALIZER,
      useFactory: (InitIconsService: InitIconsService) => InitIconsService.initIcons(),
      deps: [InitIconsService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
