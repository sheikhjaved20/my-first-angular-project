import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeNavigationComponent } from './home-navigation/home-navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CentralStoreComponent } from './central-store/central-store.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TheatersComponent } from './theaters/theaters.component';
import { TestComponent } from './test/test.component';
import { Home1Component } from './home/home1/home1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeNavigationComponent,
    FooterComponent,
    CentralStoreComponent,
    HomeComponent,
    PagenotfoundComponent,
    TheatersComponent,
    TestComponent,
    Home1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
