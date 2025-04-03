// creating required types
export type Email = string;

// creating a type for user
export interface IUser {
    name: string,
    email: Email,
    password: string
}