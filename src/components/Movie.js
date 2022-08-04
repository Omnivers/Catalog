// eslint-disable-next-line 
import React from 'react'
import { useParams } from 'react-router-dom'

const Movie = () => {
  const params = useParams()
  console.log(params)

  return (
    <div>
      Movie    
    </div>
  )
}

export default Movie;