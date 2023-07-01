import Card from "../components/Card";
import { getUsersLikedMovies } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Linked = () => {
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
    <div className="m-9 mt-32 gap-12">
      <div className="content flex column">
        <h1 className="ml-12 text-3xl font-semibold">My List</h1>
        <div className="flex flex-wrap gap-4">
          {movies?.map((movie, index) => {
            return (
              <Card
                movieData={movie}
                index={index}
                key={movie.id}
                isLiked={true}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Linked;
