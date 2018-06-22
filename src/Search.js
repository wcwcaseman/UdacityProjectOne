import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Search extends Component {
  state = {
    searchText: '',
    searchResults: []
  }

searchFor = (userInput) => { 
  userInput === '' ? this.setState({searchResults : []}) :
    BooksAPI.search(userInput)
    .then((books) => {

      books.forEach((item) => { item.shelf = 'none' } )

      let mainPageBooks =  this.props.books
      for(var i = 0; i < mainPageBooks.length; i++){
        for(var j = 0; j < books.length; j++){

          if(mainPageBooks[i].id === books[j].id){
            books[j].shelf = mainPageBooks[i].shelf;
            break;
          }

        }
      }



      this.setState({
        searchResults : books
      })
    })
  }
  
    render(){ 
      
const {searchResults} = this.state
const {onMoveBook, books} = this.props
      return (


        <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input 
            type="text" 
            placeholder="Search by title or author"
            value={this.searchText}
            onChange={(event) => this.searchFor(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
        <ol className="books-grid">
        { (searchResults != null && searchResults.length > 0) && ( searchResults.map((book) => 
          <li key={book.id}>
            <Book bookInfo={book} onMoveBook={onMoveBook}/>
          </li>                
        ))}
          </ol>
        </div>
      </div> 
    )}

}

export default Search