import { ChannelListElement } from '../../channels-list-mapper/models/channel-list-element.model';

export interface ConversationData extends Omit<ChannelListElement, 'last_message'> {
  messageSets: unknown;
}
