import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Directive } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './header/search/search.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SearchComponent],

  imports: [BrowserModule, FormsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
