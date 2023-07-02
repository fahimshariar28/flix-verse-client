import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import Slider from "../components/Slider";
import NotAvailable from "../components/NotAvaiable";
import SelectGenre from "../components/SelectGenre";
import { Helmet } from "react-helmet-async";

const TvShows = () => {
  const movies = useSelector((state) => state.flixVerse.movies);
  const genresLoaded = useSelector((state) => state.flixVerse.genresLoaded);
  const genres = useSelector((state) => state.flixVerse.genres);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
  }, []);
  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "tv" }));
    }
  }, [genresLoaded]);

  return (
    <div className="bg-black text-white">
      <Helmet>
        <title>Tv Shows | Flix Verse</title>
      </Helmet>
      <div className="pt-32">
        <SelectGenre genres={genres} type="tv" />
        {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
      </div>
    </div>
  );
};

export default TvShows;
