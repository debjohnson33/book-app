import { Book } from './book';

export interface Author {
	data: any;
	author: String;
	name: String;
	birthday: String;
	birthPlace: String;
	books: Book[];

}