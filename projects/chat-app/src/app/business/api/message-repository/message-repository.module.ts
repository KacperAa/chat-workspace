import { NgModule } from '@angular/core';

import { MessageApiService } from './message-api.service';
import { MessageMapperService } from './message-mapper/message-mapper.service';
import { SendMessageApiService } from './send-message/send-message-api.service';

@NgModule({ providers: [MessageApiService, SendMessageApiService, MessageMapperService] })
export class MessageRepositoryModule {}
