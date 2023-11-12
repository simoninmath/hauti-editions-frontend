import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Directive } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './header/search/search.component';
import { ButtonComponent } from './header/button/button.component';
import { NavComponent } from './header/nav/nav.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SearchComponent, ButtonComponent, NavComponent, AccountComponent, NewAccountComponent],

  imports: [BrowserModule, FormsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
