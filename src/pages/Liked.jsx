import { getUsersLikedMovies } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Card from "../components/Card";
import { Helmet } from "react-helmet-async";

const Liked = () => {
  const { user } = useContext(AuthContext);
  const movies = useSelector((state) => state.flixVerse.movies);
  const dispatch = useDispatch();
  const email = user.email;

  useEffect(() => {
    if (email) {
      dispatch(getUsersLikedMovies(email));
    }
  }, [email, dispatch]);

  return (
    <div className="p-9 pt-32 gap-12 h-screen bg-black text-white">
      <Helmet>
        <title>My List | Flix Verse</title>
      </Helmet>
      <div className="content flex flex-col">
        <h1 className="ml-12 text-3xl font-semibold">My List</h1>
        <div className="flex flex-wrap gap-4 mt-5">
          {movies?.map((movie, index) => {
            return (
              <Card
                movie={movie}
                index={index}
                key={movie._id}
                isLiked={true}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Liked;
