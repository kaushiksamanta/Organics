import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from './landing-page/navbar/navbar.component';
import { MainBannerComponent } from './landing-page/main-banner/main-banner.component';
import { AboutUsComponent } from './landing-page/about-us/about-us.component';
import { OurProductsComponent } from './landing-page/our-products/our-products.component';

@NgModule({
  declarations: [LandingPageComponent, NavbarComponent, MainBannerComponent, AboutUsComponent, OurProductsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
