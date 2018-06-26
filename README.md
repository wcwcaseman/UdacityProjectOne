# MyReads Project

## Project Details
The MyRead application organizes books into three categories. You can categories your book into the categories Currently Reading, Want to Read, Read or remove from the three categories by selecting none from the dropdown menu on each book displayed. To find more books you can navigate to the search page and enter a query. The application will reach out to an Udacity API to return a list of books. 


## How to setup the project

* the Project can be cloned from https://github.com/wcwcaseman/UdacityProjectOne.git
* You can clone this project by opening the [GitHub desktop application](https://desktop.github.com/).
Go to File->Clone Repository, then navigate to the 
URL tab and past in the above URL
* install all project dependencies with `npm install`
* install react-debounce-input from https://www.npmjs.com/package/react-debounce-input with `npm install --save react react-debounce-input`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── Books.js # Component for displaying a book
    ├── BookList.js # Component for the main page display the booklist categories
    ├── BookShelf.js # Component for displaying a list of Books
    ├── BookShelfChanger.js # Component select list for moving Books to different categories
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── NoMatchPage.js # 404 Page displayed when a user navigates to a page that doesn't exist
    ├── Search.js # Component for finding books in the Udacity API
```


### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

