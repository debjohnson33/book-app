import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Author } from './author/author'


@Injectable()
export class AppService {
	constructor(private http: HttpClient) {}

	getData() {
		return this.http.get('https://s3.amazonaws.com/api-fun/books.json');
	}
}