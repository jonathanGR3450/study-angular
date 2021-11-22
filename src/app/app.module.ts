import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountantModule } from './accountant/accountant.module';

import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';

import { dbzService } from './dbz/services/dbz.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    AccountantModule,
    DbzModule
  ],
  providers: [
    dbzService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
