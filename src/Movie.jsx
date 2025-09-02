import React from 'react'

function Movie({ title, director }) {
  return (
    <>
      <h1>Movie Component</h1>
      <p>Title: {title}</p>
      <p>Director: {director?.name} ({director?.age} years old)</p>
    </>
  )
}

export default Movie
