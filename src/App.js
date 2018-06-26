import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Switch, Route } from 'react-router-dom'
import Search from './Search'
import BookList from './BookList'
import NoMatchPage from './NoMatchPage'
import './App.css'


class BooksApp extends React.Component {
  state = {
    books: [],
    searchResults: [],
  }

  componentDidMount() {
   this.getAllBooks()
  }
 
getAllBooks() {
  BooksAPI.getAll()
  .then((books) => {
    this.setState(() => ({
       books : books
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
      books : newBooks
   }))

  }    
  )
}


  render() {
    return (

      <div className="app">
        <Switch>
          <Route exact path='/search' render={() => (<Search
          books={this.state.books}     
          onMoveBook={this.moveBook} />)} >
          </Route>
          <Route exact path='/' render={() => (<BookList   
            books={this.state.books} 
            onMoveBook={this.moveBook}/>)} >
          </Route>
          <Route component={NoMatchPage}/>
        </Switch>
      </div>

    )
  }
}

export default BooksApp
