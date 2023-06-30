import Card from "./Card";

const CardSlider = ({ movies, title }) => {
  return (
    <div className="grid">
      <h1 className="text-4xl font-semibold">{title}</h1>
      {movies.map((movie) => {
        return <Card key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default CardSlider;
