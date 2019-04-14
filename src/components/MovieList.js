import React from "react"
import MovieItem from "./MovieItem"

export default function MovieList({ movies }) {
  const renderedList = movies.map(movie => {
    return <MovieItem key={movie.id} movie={movie} />
  })

  return (
    <div>
      <div className="ui divider" />
      {renderedList}
    </div>
  )
}
