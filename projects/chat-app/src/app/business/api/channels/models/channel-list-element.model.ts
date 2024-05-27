import { ChannelData } from 'stream-chat';

export type ChannelListElement = Pick<ChannelData, 'name' | 'image' | 'last_message_at'>;
