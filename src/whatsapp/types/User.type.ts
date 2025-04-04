export type UserId = string;

// creating structure for user
export interface IUser {
    userId: UserId;
    firstName: string;
    lastName: string;
    mobileNumber: string;
    profilePicture: string;
}
