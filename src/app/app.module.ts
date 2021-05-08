import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { ArtistaComponent } from './artista/artista.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { NoimagenPipe } from './pipes/noimagen.pipe';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { LoadingComponent } from './loading/loading.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagenPipe,
    TarjetasComponent,
    LoadingComponent,
     DomseguroPipe
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash:true }  ),
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
