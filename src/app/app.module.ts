import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeSr from '@angular/common/locales/sr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';

registerLocaleData(localeSr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ContactComponent,
    HomeComponent,
    MenuComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'sr-RS' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
