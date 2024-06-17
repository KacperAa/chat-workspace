import { NgModule } from '@angular/core';

import { AuthHttpService } from './auth-http.service';
import { AuthStore } from './auth.store';

@NgModule({
  providers: [AuthStore, AuthHttpService],
})
export class AuthRepositoryModule {}
