import { ContentId, UserId, GroupId } from ".";


// to ensure that we have receiver for a particular message
export type MessageReceiver = { receiverId: UserId, groupId?: never } | {  receiverId?: never, groupId: GroupId };

// structure for messages
export type IMessage =  MessageReceiver & {
    senderId: UserId;
    contentId: ContentId,
    timestamp: Date;
}