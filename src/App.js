import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery'
import Button from 'react-bootstrap/Button'

class App extends Component {

 /* Constructeur */ 
constructor(props) {
super(props)
this.state = {}
this.performSearch("Am")
}

/* Accès à l'API */

performSearch(searchTerm) {
const urlString = "https://api.themoviedb.org/3/search/movie?api_key=b65f74e658807ea5fec89cb632fd6caf&query=" + searchTerm;
$.ajax({
url: urlString,
success: (searchReults) => {
console.log("Fetched data successfully")
const results = searchReults.results


/* Tableau/ Liste des films */
var movieRows = []

results.forEach((movie) => {
movie.poster_src = "https://image.tmdb.org/t/p/w185"+ movie.poster_path
const movieRow =
<MovieRow key={movie.id} movie={movie} />
movieRows.push(movieRow)
})
this.setState({rows: movieRows})
},
error: (xhr, status, err) => {
console.error("Failed to fetch data")
}
})
}

/* Système de recherche */

searchChangeHandler(event){
const boundOject = this
const searchTerm = event.target.value
this.performSearch(searchTerm)
}

/* Rendu HTML */
render() {
return (
<div>
    <table class="navBar">
        <tbody>
            <tr>
                <td>
                    <img alt="img icon" width="50" src="cinema.svg" />
                </td>
                <td>
                    <h1 class="ml-2">Flixnet</h1>
                </td>
            </tr>
        </tbody>
    </table>
    <input style={{
        fontSize:24,
        display:"block",
        width:"99%",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16
      }} onChange={this.searchChangeHandler.bind(this)} placeholder="Chsoisissez votre film" />

    {this.state.rows}
</div>
);
}
}

export default App;