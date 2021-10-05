import { useContext } from 'react'
import MovieContext from '../context/MovieContext'

const Watched = () => {

  const { watched, removeWatched } = useContext(MovieContext)

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {watched.map((movie) => (
          <div key={movie.imdbID} className="col">
            <div className="card" >
              <img src={movie.Poster} style={{ height: "350px" }} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text ">{movie.Year}</p>
                <button className="btn btn-danger" onClick={() => removeWatched(movie.imdbID)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Watched
