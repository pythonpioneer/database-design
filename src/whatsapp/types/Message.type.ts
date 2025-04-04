import { ContentId, UserId, GroupId } from ".";


export type MessageId = string;

// to ensure that we have receiver for a particular message
export type MessageReceiver = { receiverId: UserId, groupId?: never } | {  receiverId?: never, groupId: GroupId };

// structure for messages
export type IMessage =  MessageReceiver & {
    messageId: MessageId;
    senderId: UserId;
    contentId: ContentId,
    timestamp: Date;
}