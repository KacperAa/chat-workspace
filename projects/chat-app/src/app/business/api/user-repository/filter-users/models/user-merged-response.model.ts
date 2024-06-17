import { UserResponse } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-angular';

export type UserMergedResponse = UserResponse<DefaultStreamChatGenerics> & {
  photoURL: string | null;
};
