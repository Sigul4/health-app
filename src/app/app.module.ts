import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormElementsModule } from './modules/form-elements/form-elements.module';
import { InitIconsService } from './services/init-icons.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormElementsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    InitIconsService,
    {
      provide: APP_INITIALIZER,
      useFactory: (InitIconsService: InitIconsService) =>
        InitIconsService.initIcons(),
      deps: [InitIconsService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
