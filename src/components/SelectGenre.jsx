import { useDispatch } from "react-redux";
import { fetchDataByGenre } from "../store";
const SelectGenre = ({ genres, type }) => {
  const dispatch = useDispatch();
  return (
    <select
      className="flex ml-20 cursor-pointer text-base bg-black-rgba"
      onChange={(e) => {
        dispatch(
          fetchDataByGenre({
            genres,
            genre: e.target.value,
            type,
          })
        );
      }}
    >
      {genres.map((genre) => {
        return (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </select>
  );
};

export default SelectGenre;
