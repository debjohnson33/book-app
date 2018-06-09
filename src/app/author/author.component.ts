import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Author } from './author';
import { Book } from '../books/book';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['../app.component.css']
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
  	});
  }


}
