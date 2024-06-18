import { FormatMessageResponse, UserResponse } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

interface ExtendedUserResponse extends UserResponse<DefaultStreamChatGenerics> {
  id: string;
  isCurrentUser: boolean;
}

export interface MessageResponseMapper extends FormatMessageResponse<DefaultStreamChatGenerics> {
  user: ExtendedUserResponse;
}
