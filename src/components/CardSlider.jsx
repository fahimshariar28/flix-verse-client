import { useRef, useState } from "react";
import Card from "./Card";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const CardSlider = ({ movies, title }) => {
  const listRef = useRef();
  const [sliderPosition, setSliderPosition] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const handleDirection = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 70;
    if (direction === "left" && sliderPosition > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      setSliderPosition(sliderPosition - 1);
    }
    if (direction === "right" && sliderPosition < 4) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSliderPosition(sliderPosition + 1);
    }
  };

  return (
    <div
      className="flex flex-col gap-4 relative py-8"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h1 className="ml-12 text-4xl font-semibold">{title}</h1>
      <div>
        <div
          className={`absolute top-0 bottom-0 w-12 ease-in-out duration-300 z-[99] h-full left-0 ${
            !showControls ? "hidden" : ""
          } flex justify-center items-center`}
        >
          <AiOutlineLeft
            className="text-3xl cursor-pointer"
            onClick={() => handleDirection("left")}
          />
        </div>
        <div
          className="w-max gap-4 translate-x-0 ease-in-out duration-300 ml-12 flex"
          ref={listRef}
        >
          {movies.map((movie) => {
            return <Card movie={movie} key={movie.id} />;
          })}
        </div>
        <div
          className={`absolute top-0 bottom-0 w-12 ease-in-out duration-300 z-[99] h-full right-0 ${
            !showControls ? "hidden" : ""
          } flex justify-center items-center`}
        >
          <AiOutlineRight
            className="text-3xl cursor-pointer"
            onClick={() => handleDirection("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
