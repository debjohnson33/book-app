import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Author } from './author';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book App';

}
