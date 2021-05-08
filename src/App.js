import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search/:searchTerm">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
