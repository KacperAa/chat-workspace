import { NgModule } from '@angular/core';

import { MessageApiService } from './message-api.service';
import { SendMessageApiService } from './send-message/send-message-api.service';

@NgModule({ providers: [MessageApiService, SendMessageApiService] })
export class MessageRepositoryModule {}
