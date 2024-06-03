import { HttpClientModule } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { APP_ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),

    provideRouter(APP_ROUTES),
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
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(TranslateModule.forRoot()),
  ],
};
