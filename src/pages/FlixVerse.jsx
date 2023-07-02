import backgroundImage from "../assets/home.jpg";
import MovieLogo from "../assets/homeTitle.webp";
import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovies, getGenres } from "../store";
import Slider from "../components/Slider";
import { Helmet } from "react-helmet-async";
const FlixVerse = () => {
  const navigate = useNavigate();
  const movies = useSelector((state) => state.flixVerse.movies);
  const genresLoaded = useSelector((state) => state.flixVerse.genresLoaded);
  const genres = useSelector((state) => state.flixVerse.genres);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
  }, []);
  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "all" }));
    }
  }, [genresLoaded]);

  return (
    <div className="bg-black">
      <Helmet>
        <title>FlixVerse</title>
      </Helmet>
      <div className="relative brightness-50">
        <img
          src={backgroundImage}
          alt="background"
          className="w-screen h-screen object-cover"
        />
        <div className="absolute bottom-20">
          <div>
            <img
              className="w-full lg:w-full h-full lg:ml-20"
              src={MovieLogo}
              alt="Movie Logo"
            />
          </div>
          <div className="flex my-28 lg:m-20 gap-8">
            <button
              onClick={() => navigate("/player")}
              className="flex bg-yellow-50 justify-center items-center text-2xl gap-4 rounded p-2 pl-8 pr-9 border-0 cursor-pointer hover:opacity-80"
            >
              <FaPlay />
              Play
            </button>
            <button className="flex bg-yellow-50 justify-center items-center text-2xl gap-4 rounded p-2 pl-8 pr-9 border-0 cursor-pointer hover:opacity-80">
              <AiOutlineInfoCircle />
              More Info
            </button>
          </div>
        </div>
      </div>
      <Slider movies={movies} />
    </div>
  );
};

export default FlixVerse;
