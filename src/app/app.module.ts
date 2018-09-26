import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppConfigService } from './app-config.service';

import { AppComponent } from './app.component';

const appInitializerFn = (appConfig: AppConfigService) => {
  return () => {
    return appConfig.load();
  };
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [AppConfigService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
