import { TextCloudSendStatus } from '../../../../../../../../ui/src/lib/atoms/text-cloud/models/text-cloud-send.status.model';

export interface UserChannelConversationListEl {
  isUserOnline: boolean;
  channelImage: string;
  channelName: string;
  last_message_at: string;
  last_message: string | null;
  last_message_status: TextCloudSendStatus;
}
