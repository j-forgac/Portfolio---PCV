import {NgModule} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import { KosacekComponent } from './kosacek/kosacek.component';
import { JankoComponent } from './janko/janko.component';
import { SkyperComponent } from './skyper/skyper.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'kosacek', component: KosacekComponent},
  {path: 'janko', component: JankoComponent},
  {path: 'skyper', component: SkyperComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
