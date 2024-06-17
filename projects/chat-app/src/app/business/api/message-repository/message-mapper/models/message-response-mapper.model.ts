import { FormatMessageResponse } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

export type MessageResponseMapper = FormatMessageResponse<DefaultStreamChatGenerics> & {
  isCurrentUser: boolean;
};
