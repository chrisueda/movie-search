import React, { Component } from "react"

export default class SearchBar extends Component {
  state = { term: "" }

  onInputChange = term => {
    this.setState({ term })
    this.props.onFormSubmit(term)
  }

  onFormSubmit = e => {
    e.preventDefault()

    this.props.onFormSubmit(this.state.term)
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form action="" className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="">Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.onInputChange(e.target.value)}
            />
          </div>
        </form>
      </div>
    )
  }
}
