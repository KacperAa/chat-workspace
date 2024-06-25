import { NgModule } from '@angular/core';

import { LastMessageService } from './last-message/last-message.service';
import { MessageApiService } from './message-api.service';
import { MessageMapperService } from './message-mapper/message-mapper.service';
import { SendMessageApiService } from './send-message/send-message-api.service';
import { TypingService } from './typing/typing.service';

@NgModule({
  providers: [MessageApiService, SendMessageApiService, MessageMapperService, TypingService, LastMessageService],
})
export class MessageRepositoryModule {}
