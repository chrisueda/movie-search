import React, { Component } from "react"
import _ from "lodash"
import MovieList from "./MovieList"
import tmdb from "../apis/tmdb"
import SearchBar from "./SearchBar"
import PageList from "./PageList"
import "./App.css"

class App extends Component {
  state = { movies: [], term: "", page: 1 }

  onTermSubmit = async (term, page) => {
    if (!term) {
      return
    }
    const response = await tmdb.get("/search/movie", {
      params: {
        query: term,
        page: page ? page : this.state.page
      }
    })
    this.setState({
      movies: response.data.results,
      term,
      page,
      total_pages: response.data.total_pages,
      total_results: response.data.total_results
    })
  }

  render() {
    const movieSearch = _.debounce(this.onTermSubmit, 300)
    return (
      <div className="ui container">
        <h1>Movie Search App</h1>
        <SearchBar onFormSubmit={movieSearch} />
        <div className="page-list">
          <PageList
            pages={this.state.total_pages}
            page={this.state.page}
            onPageSubmit={this.onTermSubmit}
            term={this.state.term}
          />
        </div>
        <div className="result-count">
          {this.state.total_results
            ? `Results: ${this.state.total_results}`
            : ""}
        </div>

        <MovieList movies={this.state.movies} />

        <div className="footer-page-list">
          <PageList
            pages={this.state.total_pages}
            page={this.state.page}
            onPageSubmit={this.onTermSubmit}
            term={this.state.term}
          />
        </div>
      </div>
    )
  }
}

export default App
