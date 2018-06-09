import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Author } from './author';
import { Book } from './book';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./app.component.css']
})
export class AuthorComponent {
  author: Author;
  books: Book[];

  constructor(private appService: AppService) {}

  ngOnInit() {
  	this.appService.getData().subscribe((data: Author) => {
  		this.author = data.data;
      this.author.name = this.author.author;
      this.author.birthday = this.author.birthday;
      this.author.birthPlace = this.author.birthPlace;
      this.author.books = this.author.books;
      let transformedBooks: Book[] = [];
      for (let book of this.author.books) {
        transformedBooks.push(new Book(
            book.title,
            book.PublishDate,
            book.purchaseLink,
            book.imageUrl
            )
        );
      }
      this.books = transformedBooks;  
  	});
  }

  alphaSort() {
    return this.books.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      } 

      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  }

  dateSort() {
    return this.books.sort((a, b) => {
      return a.PublishDate - b.PublishDate;
    });
  }
}
