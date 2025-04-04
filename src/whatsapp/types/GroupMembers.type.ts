import { GroupId, UserId } from ".";


export type MemberRole = GroupMemberRole;

// creating structure for group members
export interface IGroupMembers {
    userId: UserId;
    groupId: GroupId;
    joinedAt: Date;
    leftAt: Date;
    role: MemberRole;
}

export enum GroupMemberRole {
    OWNER = 'owner',
    ADMIN = 'admin',
    MEMBER = 'member',
}