import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="container mt-2">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand text-primary" to="/">My List</Link>     
                <Link className="navbar-brand text-primary" to="/watched">Watched </Link>      
                <Link className="navbar-brand text-success mx-5" to="/search">Search a Movie</Link>             
            </nav>
        </div>
    );
};

export default Header