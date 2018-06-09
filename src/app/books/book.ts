export class Book {
	title: string;
	PublishDate: number;
	purchaseLink: string;
	imageUrl: string;

	constructor(title: string, PublishDate: number, purchaseLink: string, imageUrl: string) {
		this.title = title;
		this.PublishDate = PublishDate;
		this.purchaseLink = purchaseLink;
		this.imageUrl = imageUrl;
	}
}