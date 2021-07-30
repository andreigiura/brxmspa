import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrSdkModule } from '@bloomreach/ng-sdk';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent, CMS_BASE_URL, SPA_BASE_URL } from './index/index.component';
import { BannerComponent, DpCatalogModule, FormBuilderComponent, LayoutBuilderComponent, TeaserComponent, TextComponent } from 'dp-catalog';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    IndexComponent,
  ],
  entryComponents: [
    BannerComponent,
    LayoutBuilderComponent,
    TextComponent,
    FormBuilderComponent,
    TeaserComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'brxm-angular-spa' }),
    BrowserModule,
    BrowserTransferStateModule,
    BrSdkModule,
    AppRoutingModule,
    DpCatalogModule
  ],
  providers: [
    { provide: CMS_BASE_URL, useValue: environment.cmsBaseUrl },
    { provide: SPA_BASE_URL, useValue: environment.spaBaseUrl },
  ],
})
export class AppModule { }
