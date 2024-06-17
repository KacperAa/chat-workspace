import { NgModule } from '@angular/core';

import { FilterUsersService } from './filter-users/filter-users.service';
import { UpdateUserProfileApiService } from './update-user-profile/update-user-profile-api.service';
import { UserApiService } from './user-api.service';

@NgModule({
  providers: [UserApiService, FilterUsersService, UpdateUserProfileApiService],
})
export class UserRepositoryModule {}
