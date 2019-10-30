import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Book } from './book';
 

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private dbPath = '/books';
 
  booksRef: AngularFireList<Book> = null;
 
  constructor(private db: AngularFireDatabase) {
    this.booksRef = db.list(this.dbPath);
  }
 
  createBook(book: Book): void {
    this.booksRef.push(book);
  }
 
  updateBook(key: string, value: any): Promise<void> {
    return this.booksRef.update(key, value);
  }
 
  deleteBook(key: string): Promise<void> {
    return this.booksRef.remove(key);
  }
 
  getBooksList(): AngularFireList<Book> {
    return this.booksRef;
  }
 
  deleteAll(): Promise<void> {
    return this.booksRef.remove();
  }
}
