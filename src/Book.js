import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'


class Book extends Component {

    render(){

      const { bookInfo, onMoveBook } = this.props;
      
      return(
        <div className="book">
        <div className="book-top">
          {/*width height and background all change*/}
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: bookInfo.imageLinks ? `url(${bookInfo.imageLinks.thumbnail})` : '' }}></div>
          <BookShelfChanger bookInfo={bookInfo} onMoveBook={onMoveBook} />
        </div>
        <div className="book-title">{bookInfo.title}</div>
        <div className="book-authors">{bookInfo.authors ? bookInfo.authors.join(', ') : ''}</div>
      </div>    
    )}
}

export default Book