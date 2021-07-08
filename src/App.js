import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieList from "./components/movieList/MovieList";
import Filter from "./components/filter/Filter";
import Trailer from "./components/trailer/Trailer";
import AddMovie from "./components/addMovie/AddMovie";
import { useSelector } from "react-redux";

function App() {
  const movies = useSelector((state) => state.movie);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:id" render={() => <Trailer movies={movies} />} />
          <Route path="/">
            <AddMovie />
            <div className="list">
              <Filter />
              <MovieList />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
