import { UserId } from "@/library-management/types/user/user.types";

// types for book models
export type BookId = string;

export interface Author {
    name: string;
    authorId: string;
    books: BookId[];
}

// creatign a type for book
export interface IBook {
    title: string;
    bookId: BookId;  // ISBN
    category: string[];  // drama, romance, mystery, ... can be multiple categories
    authors: Author[];  // written by multiple authors
    availableCopies: number;
    totalCopies: number;
    borrowedBy: UserId[];
}
