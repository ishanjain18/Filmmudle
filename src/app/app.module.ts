import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbButtonModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { FilmCardComponent } from './components/film-card/film-card.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { FavouritesPageComponent } from './pages/favourites-page/favourites-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    FilmCardComponent,
    SearchPageComponent,
    FavouritesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbCardModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
