import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};

export const getGenres = createAsyncThunk("flixVerse/genres", async () => {
  const {
    data: { genres },
  } = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${
      import.meta.env.VITE_TMDB_APIKEY
    }`
  );
  return genres;
});

const createArrayFromRawData = (array, moviesArray, genres) => {
  array.forEach((movie) => {
    const movieGenres = [];
    movie.genre_ids.forEach((genre) => {
      const name = genres.find(({ id }) => id === genre);
      if (name) movieGenres.push(name.name);
    });
    if (movie.backdrop_path)
      moviesArray.push({
        id: movie.id,
        name: movie?.original_name ? movie.original_name : movie.original_title,
        image: movie.backdrop_path,
        genres: movieGenres.slice(0, 3),
      });
  });
};

const getRawData = async (api, genres, paging = false) => {
  const moviesArray = [];
  for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
    const {
      data: { results },
    } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
    createArrayFromRawData(results, moviesArray, genres);
  }
  return moviesArray;
};

export const fetchMovies = createAsyncThunk(
  "flixVerse/trending",
  async ({ type }, thunkAPI) => {
    const {
      flixVerse: { genres },
    } = thunkAPI.getState();
    return getRawData(
      `https://api.themoviedb.org/3/trending/${type}/week?api_key=${
        import.meta.env.VITE_TMDB_APIKEY
      }`,
      genres,
      true
    );
  }
);

const FlixVerseSlice = createSlice({
  name: "FlixVerse",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoaded = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export const store = configureStore({
  reducer: {
    flixVerse: FlixVerseSlice.reducer,
  },
});

export const { setGenres, setMovies } = FlixVerseSlice.actions;
