import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service'

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  book: Book = new Book();
  submitted = false;
 
  constructor(private bookService: BookService) { }
 
  ngOnInit() {
  }
 
  newCustomer(): void {
    this.submitted = false;
    this.book = new Book();
  }
 
  save() {
    this.bookService.createBook(this.book);
    this.book = new Book();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
