import { HttpClientModule } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { APP_ROUTES } from './app.routes';
import { ApiModule } from './business/api/api.module';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(ApiModule),
    provideRouter(APP_ROUTES),
    importProvidersFrom(),
    provideAnimationsAsync(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'kaa-chat-app',
          appId: '1:116235810449:web:396adf9ab0108f8b163130',
          storageBucket: 'kaa-chat-app.appspot.com',
          apiKey: 'AIzaSyA5T3S4L8G4u84HIumeScT-GLJb0ynhuYU',
          authDomain: 'kaa-chat-app.firebaseapp.com',
          messagingSenderId: '116235810449',
        })
      )
    ),
    importProvidersFrom(provideDatabase(() => getDatabase())),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(TranslateModule.forRoot()),
  ],
};
