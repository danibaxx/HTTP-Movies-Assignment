import React, { useState, useEffect } from 'react'

function UpdateMovie() {
  const [updateMovie, setUpdateMovie] = useState({
    id: '',
    title: '',
    director: '',
    metascore: '',
    stars: []
  })
  return (
    <div>
      <form>
        <input type='text' name='title' placeholder='Title' />
        <input type='text' name='director' placeholder='Director' />
        <input type='number' name='metascore' placeholder='Metascore' />
        <input type='text' name='title' placeholder='Title' />

        <button type='submit'>Update</button>
      </form>
    </div>
  )
}

export default UpdateMovie;