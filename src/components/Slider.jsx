import CardSlider from "./CardSlider";

const Slider = ({ movies }) => {
  const getMoviesFromRange = (start, end) => {
    return movies.slice(start, end);
  };
  return (
    <div className="text-white">
      <CardSlider title="Trending Now" movies={getMoviesFromRange(0, 10)} />
      <CardSlider title="New Releases" movies={getMoviesFromRange(10, 20)} />
      <CardSlider
        title="Blockbuster Movies"
        movies={getMoviesFromRange(20, 30)}
      />
      <CardSlider
        title="Popular on Flix Verse"
        movies={getMoviesFromRange(30, 40)}
      />
      <CardSlider title="Action Movies" movies={getMoviesFromRange(40, 50)} />
      <CardSlider title="Epics" movies={getMoviesFromRange(50, 60)} />
    </div>
  );
};

export default Slider;
