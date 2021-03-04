import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {KosacekComponent} from './kosacek/kosacek.component';
import {JankoComponent} from './janko/janko.component';
import {SkyperComponent} from './skyper/skyper.component';
import {HomeComponent} from './home/home.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    KosacekComponent,
    JankoComponent,
    SkyperComponent,
    HomeComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
