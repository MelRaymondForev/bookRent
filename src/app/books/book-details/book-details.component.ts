import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  @Input() book: Book;
 
  constructor(private bookService: BookService) { }
 
  ngOnInit() {
  }
 
  updateActive(isActive: boolean) {
    this.bookService
      .updateBook(this.book.key, { active: isActive })
      .catch(err => console.log(err));
  }
 
  deleteBook() {
    this.bookService
      .deleteBook(this.book.key)
      .catch(err => console.log(err));
  }
}
