import { useContext } from 'react'
import MovieContext from '../context/MovieContext'

const Movie = ({ movie }) => {

    const {addMyList, myList, watched} = useContext(MovieContext)

    let storedMovie = myList.find(m => m.imdbID === movie.imdbID)
    let storedWatched = watched.find(m => m.imdbID === movie.imdbID)

    const isMyList = storedMovie ? true : storedWatched ? true : false

    return (
       
        <div className="card mb-3" style={{ maxHeight: "250px" , maxWidth: "600px"}}>
        <div className="row g-2">
            <div className="col-md-4">
                <img src={movie.Poster} style={{ width: "200px", height: "250px" }} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{movie.Title}</h5>
                    <p className="card-text"><small className="text-muted">{movie.Year}</small></p>
                  
                </div>
                <button  disabled={isMyList} 
                    onClick={() => addMyList(movie)} className="btn btn-success ">Add My List</button>
            </div>
        </div>
    </div>

    )
}

export default Movie
