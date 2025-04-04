import { UserId } from ".";

export type GroupId = string; 

// creating structure for group
export interface IGroup {
    groupId: GroupId;
    name: string;
    createdBy: UserId;
    createdAt: Date;
}