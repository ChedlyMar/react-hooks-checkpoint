import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieList from "./components/movieList/MovieList";
import Filter from "./components/filter/Filter";
import Trailer from "./components/trailer/Trailer";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Avengers",
      description:
        "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",
      posterURL: "./theAvengers.jpg",
      rating: "2",
      trailer:
        "https://imdb-video.media-imdb.com/vi1891149081/1434659607842-pgv4ql-1616202397016.mp4?Expires=1624703783&Signature=eq3s66izwU1T4JsZrf1sS~fbG9IwYnz5EjqzQ0~YozVSllCYd8~wimx74Se74dZdxSnQ2RXGTPcwbzN9nnqCIaS9i-7Kt9Fpxnr6T3W1FoBhzpvESbCBYFFBhwfHdTxbh3PBNqt5rU7OPtbKQgIfAdylZn1y0Q~bmZT2pURs2TbRYbfDa3CRI08Rlv0b88zTUlygdOFvAZpbHTYELMj5~qqED0hfw9gzXgtVqopm7TsPrGEt6t12mT8MDnfrjoH4fxCKdGLNYVytgc4HWJBn6jvOCa~qD9-Dsxts8mEdD9mQrdiT~hJAoQEj2bKPpKRA-IIQDpEpKQCtFFo9d-jNoQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
    },
    {
      id: 2,
      title: "Avengers: Age of Ultron",
      description:
        "Tony Stark builds an artificial intelligence system named Ultron with the help of Bruce Banner. When the sentient Ultron makes plans to wipe out the human race, the Avengers set out to stop him.",
      posterURL: "./AvengersAgeofUltron.jpeg",
      rating: "4",
      trailer:
        "https://imdb-video.media-imdb.com/vi2821566745/1434659607842-pgv4ql-1612218463733.mp4?Expires=1624703890&Signature=ul8Z1I2FiRYicI6EItMhQaGgFSnrhST21BBRdoQKabqhTv~idIrEaggjUg0nibqgTs9t8wVPk63KI6xSWSVhMPcNR1dQahs5FwiNQaWXNSIzjRfAb4H7xGEd94w6bVsqhg8bXfFaqqbkNKbuQDssLM6uOj0KVQF~fJmBGBmJB70a2RldA8SbfMKDyujYkd6Ko4oyyQsczqt6V8PQ8kldJUiZ6f13VxjjV5ZqsnIAB3o8gDBcEI0eUvPeG2SzBy~dhUFeAF6lNzpCis48xkmUEuP7NQ6V1~Vlb6UsfE55RfPidQE6wrLFVebHgGoTxe~GxuHLVhNqWmRf3yE1mfJu~w__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
    },
    {
      id: 3,
      title: "Avengers: Infinity War",
      description:
        "The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.",
      posterURL: "./AvengersInfinityWar.jpg",
      rating: "5",
      trailer:
        "https://imdb-video.media-imdb.com/vi528070681/1434659607842-pgv4ql-1523121356094.mp4?Expires=1624703932&Signature=WFnhkaz5Kx~8l9xcQXJuZ~y8JHoPJ98aVMJOnL0LzooLKeLxPEnhSnw1~o0QQwPREof-7e14jumnPHBUxuckdRbpOnUEf7Egb~5~MOp7qu-LA1L3In8mNvpVT8L-lEIgF9S7HpcfgjnopezFG-PrPkTe4NRrakKsPG9es5ITWl0wUNGYWWXYRGdkNOZNulmMLX3x5DKjQZcP3T89TFmVMpiav8DVXzn12pWGBHQVMsydjUsZxLk8Kn0gc~PjYMN5fH-YX~thyaktpjaetC~VwcU~eHrqtu0fFH9e7YVVOFR1Op91GkMGDUPU9cGAO3gIRwhBOJsqJkqJOWjGpSjkWA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
    },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterUrl] = useState("");
  const [rating, setRating] = useState(0);

  const [filtredMovies, setFiltredMovies] = useState(movies);

  const addMovie = () => {
    let newMovie = {
      id: movies[movies.length - 1].id + 1,
      title: title,
      description: description,
      posterURL: posterURL,
      rating: rating,
    };
    setMovies([...movies, newMovie]);
    setFiltredMovies([...movies, newMovie]);
  };

  const filterHandler = (e) => {
    let filtredList;
    if (!parseInt(e.target.value)) {
      filtredList = movies.filter((movie) =>
        movie.title.includes(e.target.value)
      );
    } else {
      filtredList = movies.filter((movie) => movie.rating >= e.target.value);
    }
    setFiltredMovies(filtredList);
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:id" render={() => <Trailer movies={movies} />} />

          <Route path="/">
            <div className="new-movie">
              <div className="input-group">
                <label>Title: </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Description: </label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Rating: </label>
                <input
                  type="text"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Image: </label>
                <input
                  type="text"
                  value={posterURL}
                  onChange={(e) => setPosterUrl(e.target.value)}
                />
              </div>

              <button className="add-movie" onClick={addMovie}>
                Add Movie
              </button>
            </div>
            <div className="list">
              <Filter onChange={filterHandler} />
              <MovieList movies={filtredMovies} />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
