import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { SearchComponent } from './header/search/search.component';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Directive } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    LogoComponent, 
    SearchComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
//    Directive
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}
