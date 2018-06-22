import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'


class BookList extends Component {

    render(){
      const {books, currentlyReading, wantToRead, read, onMoveBook } = this.props
      return(
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf title="Currently Reading" shelfList={currentlyReading} onMoveBook={onMoveBook}/>
            <BookShelf title="Want to Read" shelfList={wantToRead} onMoveBook={onMoveBook} />
            <BookShelf title="Read" shelfList={read} onMoveBook={onMoveBook}/>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
        </div>
    )}
}

export default BookList