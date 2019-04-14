import React from "react"

const MovieItem = ({ movie }) => {
  return (
    <div className="ui grid">
      <div className="four wide column">
        <img
          src={
            `https://image.tmdb.org/t/p/w154` +
            movie.poster_path +
            `?api_key=403ffcb3b4481da342203f94fb6e937e`
          }
          alt={movie.title}
        />
      </div>

      <div className="twelve wide column">
        <h3 className="title">{movie.title}</h3>
        <h4 className="release_date">{movie.release_date}</h4>
        <p className="overview">{movie.overview}</p>
        <p className="vote_average">Rating: {movie.vote_average}</p>
        <p className="vote_count">Reviews: {movie.vote_count}</p>
      </div>
    </div>
  )
}

export default MovieItem
