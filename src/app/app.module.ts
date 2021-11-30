import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/* Google sesion */
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
} from 'angularx-social-login';
import { VeraportadorComponent } from './components/aportador/veraportador/veraportador.component';
import { ListaraportadorComponent } from './components/aportador/listaraportador/listaraportador.component';
import { RegistraraportadorComponent } from './components/aportador/registraraportador/registraraportador.component';
import { ActualizaraportadorComponent } from './components/aportador/actualizaraportador/actualizaraportador.component';
import { HomeComponent } from './components/public/home/home.component';
import { VoluntarioComponent } from './components/public/voluntario/voluntario.component';
import { AportadorComponent } from './components/public/aportador/aportador.component';

import { LoadscriptsService } from './services/auth/loadscripts.service';
import { aportadorInterceptor, AportadorInterceptor } from './interceptors/aportador.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VeraportadorComponent,
    ListaraportadorComponent,
    RegistraraportadorComponent,
    ActualizaraportadorComponent,
    HomeComponent,
    VoluntarioComponent,
    AportadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    LoadscriptsService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '311058642947-89hh19mdfdrdjvdcqvfmqslrr7je2689.apps.googleusercontent.com'
            ),
          }
        ]
      } as SocialAuthServiceConfig,
    },
    aportadorInterceptor

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
