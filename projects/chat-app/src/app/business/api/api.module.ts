import { NgModule } from '@angular/core';

import { AuthRepositoryModule } from './auth-repository/auth-repository.module';
import { ChannelRepositoryModule } from './channel-repository/channel-repository.module';
import { FriendRepositoryModule } from './friend-repository/friend-repository.module';
import { MessageRepositoryModule } from './message-repository/message-repository.module';
import { UserRepositoryModule } from './user-repository/user-repository.module';

@NgModule({
  imports: [
    AuthRepositoryModule,
    ChannelRepositoryModule,
    FriendRepositoryModule,
    MessageRepositoryModule,
    UserRepositoryModule,
  ],
  exports: [
    AuthRepositoryModule,
    ChannelRepositoryModule,
    FriendRepositoryModule,
    MessageRepositoryModule,
    UserRepositoryModule,
  ],
})
export class ApiModule {}
