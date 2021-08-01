import "./App.css";
import { useState } from "react";
import MovieList from "./components/movieList/MovieList";
import Filter from "./components/filter/Filter";
import { Movie } from "./models/movie";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Avengers",
      description:
        "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",
      posterURL: "./theAvengers.jpg",
      rating: "2",
    },
    {
      id: 2,
      title: "Avengers: Age of Ultron",
      description:
        "Tony Stark builds an artificial intelligence system named Ultron with the help of Bruce Banner. When the sentient Ultron makes plans to wipe out the human race, the Avengers set out to stop him.",
      posterURL: "./AvengersAgeofUltron.jpeg",
      rating: "4",
    },
    {
      id: 3,
      title: "Avengers: Infinity War",
      description:
        "The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.",
      posterURL: "./AvengersInfinityWar.jpg",
      rating: "5",
    },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterUrl] = useState("");
  const [rating, setRating] = useState(0);

  const [filtredMovies, setFiltredMovies] = useState<Movie[]>(movies);

  const addMovie = () => {
    let newMovie = {
      id: movies[movies.length - 1].id + 1,
      title: title,
      description: description,
      posterURL: posterURL,
      rating: rating.toString(),
    };
    setMovies([...movies, newMovie]);
    setFiltredMovies([...movies, newMovie]);
  };

  const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            onChange={(e) => setRating(+e.target.value)}
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
    </div>
  );
}

export default App;
