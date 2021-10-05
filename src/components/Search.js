import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Movie from "./Movie";


const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);
    axios
      .get(`http://www.omdbapi.com/?s=${e.target.value}&apikey=6a6bd0f4`)
      .then((res) => setResults(res.data.Search))
      .catch(error => console.log(error))
  };

  return (

    <div style={{ maxWidth: "600px", margin: "0 auto" }}>

      <input
        ref={inputRef}
        className="mt-5 input-group input-group-lg"
        type="text"
        placeholder="Search a movie"
        value={query}
        onChange={onChange}
      />
      
      {
        results && (
          <ul style={{ padding: "0", margin: "0", marginTop: "20px" }}>
            {results.map((movie) => (
              <li style={{ listStyle: "none" }} key={movie.imdbID}>
                <Movie movie={movie} />
              </li>
            ))}
          </ul>
        )
      }
    </div>
  );
};

export default Search
