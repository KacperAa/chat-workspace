import { NgModule } from '@angular/core';

import { AddFriendService } from './add-friend/add-friend.service';
import { FirendApiService } from './firend-api.service';
import { FriendsListMapperService } from './friends-list-mapper/friends-list-mapper.service';

@NgModule({ providers: [FirendApiService, AddFriendService, FriendsListMapperService] })
export class FriendRepositoryModule {}
