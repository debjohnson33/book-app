import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Author } from './author';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book App';
  author: Author;

  constructor(private appService: AppService) {}

  ngOnInit() {
  	this.appService.getData().subscribe((data: Author) => {
  		this.author = data.data;
      console.log(this.author);
  	});
  }
}
