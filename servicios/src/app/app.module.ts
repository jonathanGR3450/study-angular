import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarwarsComponent } from './pages/starwars/starwars.component';
import { NasaComponent } from './pages/nasa/nasa.component';
import { DetailComponent } from './pages/detail/detail.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StarwarsComponent,
    NasaComponent,
    DetailComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
