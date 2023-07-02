import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import axios from "axios";
import video from "../assets/video.mp4";
import { useDispatch } from "react-redux";
import { removeMovieFromLiked } from "../store";
import Swal from "sweetalert2";

const Card = ({ movie, isLiked = false }) => {
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const email = user.email;

  const addToList = async () => {
    try {
      const res = await axios.post(
        "https://flix-verse-server.vercel.app/addWatchList",
        {
          email,
          data: movie,
        }
      );
      if (res.data === "Movie already exists") {
        Swal.fire({
          icon: "error",
          title: "Movie already exists in the list",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (res.data.acknowledged === true) {
        Swal.fire({
          icon: "success",
          title: "Movie added to the list",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromList = async () => {
    try {
      await dispatch(removeMovieFromLiked({ movieId: movie.id, email }));
      Swal.fire({
        icon: "success",
        title: "Movie removed from the list",
        showConfirmButton: false,
        timer: 1500,
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="max-w-[14.375rem] w-[14.375rem] h-full relative text-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="rounded-md w-full h-full object-cover z-10"
        src={`https://image.tmdb.org/t/p/w500${movie.image}`}
        alt="card"
        onClick={() => navigate("/player")}
      />

      {isHovered && (
        <div className="z-50 h-fit w-80 absolute -top-[18vh] left-0 shadow-xl shadow-black-rgba bg-slate-800 ease-in-out duration-300">
          <div className="relative h-36">
            <img
              className="w-full h-36 object-cover rounded top-0 z-[4] absolute"
              src={`https://image.tmdb.org/t/p/w500${movie.image}`}
              alt="card"
              onClick={() => navigate("/player")}
            />
            <video
              className="w-full h-36 object-cover rounded top-0 z-[5] absolute"
              src={video}
              autoPlay={true}
              loop
              muted
              onClick={() => navigate("/player")}
            />
          </div>
          <div className="flex flex-col p-4 gap-2">
            <h3 className="name" onClick={() => navigate("/player")}>
              {movie.name}
            </h3>
            <div className="flex justify-between">
              <div className="flex gap-4">
                <IoPlayCircleSharp
                  className="cursor-pointer"
                  title="Play"
                  onClick={() => navigate("/player")}
                />
                <RiThumbUpFill className="cursor-pointer" title="Like" />
                <RiThumbDownFill className="cursor-pointer" title="Dislike" />
                {isLiked ? (
                  <BsCheck
                    className="cursor-pointer"
                    title="Remove from List"
                    onClick={removeFromList}
                  />
                ) : (
                  <AiOutlinePlus
                    className="cursor-pointer"
                    title="Add to my list"
                    onClick={addToList}
                  />
                )}
              </div>
              <div>
                <BiChevronDown className="cursor-pointer" title="More Info" />
              </div>
            </div>
            <div className="flex">
              <ul className="flex gap-4">
                {movie.genres.map((genre, index) => (
                  <li className="pr-3" key={index}>
                    {genre}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
