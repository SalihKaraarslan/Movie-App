import { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Header  from "./components/Header";
import  MyList  from "./components/MyList";
import  Watched  from "./components/Watched";
import  Search  from './components/Search';
import MovieContext from './context/MovieContext';

const App = () => {

  const { myList } = useContext(MovieContext)

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <MyList myList={myList} />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/watched">
          <Watched />
        </Route>
      </Switch>
    </Router>
  );
}

export default App