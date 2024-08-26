import React from 'react'

const MovieUI = ({ movie: { omdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movies" key={omdbID}>
    <div className='year'>
      <p>{Year}</p>
    </div>

    <div className='poster'>
      <img src={Poster !== "N/A" ? Poster : "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"} alt={Title} />
    </div>

    <div className='text'>
      <span>{Type}</span>
      <h3>{Title}</h3>
    </div>
  </div>
  )
}

export default MovieUI