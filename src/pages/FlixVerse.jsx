import backgroundImage from "../assets/home.jpg";
import MovieLogo from "../assets/homeTitle.webp";
import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const FlixVerse = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black">
      <div className="relative brightness-50">
        <img
          src={backgroundImage}
          alt="background"
          className="w-screen h-screen object-cover"
        />
        <div className="absolute bottom-20">
          <div>
            <img
              className="w-full h-full ms-20"
              src={MovieLogo}
              alt="Movie Logo"
            />
          </div>
          <div className="flex m-20 gap-8">
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
    </div>
  );
};

export default FlixVerse;
