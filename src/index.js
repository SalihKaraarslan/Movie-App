import ReactDOM from "react-dom";
import App from "./App";
import MovieLayer from "./context/MovieState";

ReactDOM.render(
  <MovieLayer>
    <App />
  </MovieLayer>,
  document.getElementById("root")
);