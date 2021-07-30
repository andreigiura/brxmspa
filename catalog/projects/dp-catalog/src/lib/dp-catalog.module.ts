import { Injector, NgModule } from '@angular/core';
import { BaseComponent } from './components/base/base.component';
import { TextComponent } from './components/text/text.component';
import { BannerComponent } from './components/banner/banner.component';
import { TeaserComponent } from './components/teaser/teaser.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { LayoutBuilderComponent } from './components/layout-builder/layout-builder.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppInjector } from './services/app-injector';
import { BrSdkModule } from '@bloomreach/ng-sdk';
import { HeroComponent } from './components/hero/hero.component';



@NgModule({
  declarations: [BaseComponent, TextComponent, BannerComponent, TeaserComponent, FormBuilderComponent, LayoutBuilderComponent, HeroComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrSdkModule
    
  ],
  exports: [TextComponent, BannerComponent, TeaserComponent, FormBuilderComponent, LayoutBuilderComponent]
})
export class DpCatalogModule {
  constructor(injector: Injector) {
    console.log("gain this inajector!!!", injector);
    AppInjector.setInjector(injector);
    
  }
 }
