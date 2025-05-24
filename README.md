# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

##
##
##


## 🔍 Before Search
![Before Search](./images/Before%20search.png)
##
##
## 🎯 After Search
![After Search](./images/after%20search.png)




## 🧩 Component Structure

The Movie Browser React app is structured into reusable components that each serve a specific function in the UI. Here's how each part works:



### 📄 `Home.js`

This is the main page of the application. It brings everything together:

* Manages the overall state:

  * `movies`: List of movies returned from the OMDb API
  * `loading`: Tracks if a request is in progress
  * `error`: Stores error messages if the request fails
* Contains the `handleSearch` function, which:

  * Calls the `searchMovies` function with the user's input
  * Updates state based on the API response
* Renders:

  * A logo heading (`Movie Browser`)
  * The search bar (`SearchBar`)
  * Movie results via `MovieList`
  * A footer (`Footer`)



### 🔍 `SearchBar.js`

This component provides the search UI:

* Renders a search input field and a submit button
* Uses React's `useState` to track the input text (`term`)
* Calls `onSearch(term)` (passed as a prop from `Home.js`) when the form is submitted
* Styled via `SearchBar.css`



### 🎞️ `MovieList.js`

* Accepts a `movies` array as props
* If no movies are passed, it displays a “No movies found.” message
* Otherwise, it maps over the list and renders a `MovieCard` for each movie
* Uses semantic HTML (`<section>`) and CSS styling from `MovieList.css`



### 🎬 `MovieCard.js`

Displays individual movie details:

* Shows the **poster**, **title**, **year**, and **type**
* If the poster is `"N/A"`, it displays a placeholder image
* Uses semantic structure and is styled with `MovieCard.css`



### 📦 API Integration (`searchMovies.js`)

* This module handles communication with the OMDb API.
* It exports the `searchMovies` async function that:

  * Sends a GET request to the OMDb API with a search term
  * Returns search results to the `Home.js` component
* Uses **Axios** for cleaner request handling
* The API key is kept in an environment variable (`REACT_APP_OMDB_API_KEY`)



### 📜 `Footer.js`

Displays a site footer with:

 Three clickable buttons: Android App, Terms of Service, Contact
 A short description about the app and streaming policy
 Styled using `Footer.css`
 Always appears at the bottom of the page, even when there's little content




This read me File was written partially with AI. 

