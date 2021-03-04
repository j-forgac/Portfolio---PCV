import {NgModule} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import { KosacekComponent } from './kosacek/kosacek.component';
import { JankoComponent } from './janko/janko.component';
import { SkyperComponent } from './skyper/skyper.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Kosacek', component: KosacekComponent},
  {path: 'Janko', component: JankoComponent},
  {path: 'Skyper', component: SkyperComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
