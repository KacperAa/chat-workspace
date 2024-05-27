import { ChannelData } from 'stream-chat';

type ChannelListElementBase = Pick<ChannelData, 'id' | 'name' | 'image' | 'last_message_at'>;

export type ChannelListElement = {
  +readonly [P in keyof ChannelListElementBase]-?: string;
};
