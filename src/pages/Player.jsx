import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import video from "../assets/video.mp4";

const Player = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-screen h-screen">
        <div className="absolute p-8 z-10 text-5xl cursor-pointer">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video
          className="w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          controls
          muted
        />
      </div>
    </div>
  );
};

export default Player;
