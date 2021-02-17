import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

import {AppComponent} from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent
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
