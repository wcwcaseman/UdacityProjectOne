import React, { Component } from 'react'
import Book from './Book'


class BookShelf extends Component {

    render(){
      
      const {shelfList, title, onMoveBook} = this.props


      return(
        <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
        {shelfList.length > 0 && (
          <ol className="books-grid">
            {shelfList.map((book) =>
            <li key={book.id} >
              <Book bookInfo={book} onMoveBook={onMoveBook}/>
            </li>
            )}
          </ol>
         )}
        </div>
      </div>
    )}
}

export default BookShelf