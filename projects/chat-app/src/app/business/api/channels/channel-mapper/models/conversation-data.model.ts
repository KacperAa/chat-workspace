import { ChannelListElement } from '../../channels-list-mapper/models/channel-list-element.model';

export interface ConversationData extends ChannelListElement {
  messageSets: any;
}
