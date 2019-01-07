import React, { Component } from "react";
import "./App.css";
import Movie from './Movie.js'
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {}

    this.preformSearch('MARVEL')
  }
  preformSearch(searchTerm){
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=2a9651f79952a2ea11215db9e038f4d2&language=en-US&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResult)=>{
        // console.log(searchResult);
        const results =searchResult.results
        // console.log(results[0]);

        const movieRows= []
        results.forEach((movie)=>{
          movie.poster_src = 'https://image.tmdb.org/t/p/w185/' + movie.poster_path
          // console.log(movie.title);
          const movieRow = <Movie key={movie.id} movie={movie} />
            movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err)=>{
        console.error("Data doesn't exist")
      }
    })
  }

  searchChangeHandler(event){
      console.log(event.target.value);
      const boundObject= this
      const searchTerm = event.target.value
      boundObject.preformSearch(searchTerm)

  }
  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img width="100"src="https://cdn3.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/38-512.png"  />
              </td>
              <td>
                <h1>MovA</h1>
              </td>
            </tr>
          </tbody>
        </table>
        <input
              onChange={this.searchChangeHandler.bind(this)}
              className="input"
              placeholder="Search for movie in Marvel's..."
        />

        {this.state.rows}
      </div>
    );
  }
}

export default App;
