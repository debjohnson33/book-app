import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Author } from '../author/author';
import { Book } from './book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['../app.component.css']
})
export class BookListComponent {
  author: Author;
  books: Book[];

  constructor(private appService: AppService) {}

  ngOnInit() {
  	this.appService.getData().subscribe((data: Author) => {
  	  //this.author = data.data;
      console.log(this.books);
      // this.author.books = this.author.books;
      // let transformedBooks: Book[] = [];
      // for (let book of this.author.books) {
      //   transformedBooks.push(new Book(
      //       book.title,
      //       book.PublishDate,
      //       book.purchaseLink,
      //       book.imageUrl
      //       )
      //   );
      // }
      // this.books = transformedBooks;  
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

interface Books {
  books: Book[];
}
