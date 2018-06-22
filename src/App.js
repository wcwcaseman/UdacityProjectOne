import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import Search from './Search'
import BookList from './BookList'
import './App.css'


class BooksApp extends React.Component {
  state = {
    books: [],
    searchResults: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  componentDidMount() {
   this.getAllBooks()
  }
 
getAllBooks() {
  BooksAPI.getAll()
  .then((books) => {
    this.setState(() => ({
       books : books,
       currentlyReading : books.filter((book) => book.shelf === "currentlyReading"),
       wantToRead : books.filter((book) => book.shelf === "wantToRead"),
       read : books.filter((book) => book.shelf === "read")
    }))
  })
}  

moveBook = (book, shelf) => {

  BooksAPI.update(book, shelf)
  .then((results) =>
  {
    book.shelf = shelf;
    let newBooks = this.state.books.filter(currentBook => currentBook.id !== book.id);
    newBooks.push(book);
    this.setState(() => ({
      books : newBooks,
      currentlyReading : newBooks.filter((book) => book.shelf === "currentlyReading"),
      wantToRead : newBooks.filter((book) => book.shelf === "wantToRead"),
      read : newBooks.filter((book) => book.shelf === "read")
   }))

  }    
  )
}


  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() => (<Search
        books={this.state.books}     
        onMoveBook={this.moveBook} />)} >
        </Route>
        <Route exact path='/' render={() => (<BookList 
          currentlyReading={this.state.currentlyReading}
          wantToRead={this.state.wantToRead}   
          read={this.state.read}      
          books={this.state.books} 
          onMoveBook={this.moveBook}/>)} >
        </Route>
      </div>
    )
  }
}

export default BooksApp
