import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import SearchPage from "./pages/SearchPage/SearchPage";
import TopRated from "./pages/TopRated/TopRated";
import Trending from "./pages/Trending/Trending";
import Upcoming from "./pages/Upcoming/Upcoming";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search/:searchTerm" exact component={SearchPage} />
          <Route path="/movie/:movieId" exact component={Movie} />
          <Route path="/trending" exact component={Trending} />
          <Route path="/upcoming" exact component={Upcoming} />
          <Route path="/toprated" exact component={TopRated} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
