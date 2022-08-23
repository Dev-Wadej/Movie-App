import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/instance';

const initialState = {
    movies: [],
    discovermovies: [],
    genres: [],
    isLoading: true,
};
const api_key = 'fe6cb1329b44f880b214a4f880fb4a76';

//-------------------async operations to fetch from the backend----------------
export const getMovies = createAsyncThunk(
    'movies',
    async({
            pagenumber = '',
            movieType,
            multiple = '',
            searchItem = '',
            type = 'movie',
        },
        thunkAPI
    ) => {
        try {
            if (movieType === 'trending') {
                const res = await instance.get(
                    `/trending/all/day?api_key=${api_key}&page=${pagenumber}`
                );
                return await res.data;
            } else if (movieType === 'movies') {
                const res = await instance.get(
                    `/discover/movie?api_key=${api_key}&page=${pagenumber}&with_genres=${multiple}`
                    // hwith_genres=18,28
                );
                console.log(multiple);
                return await res.data;
            } else if (movieType === 'series') {
                const res = await instance.get(
                    `/discover/tv?api_key=${api_key}&page=${pagenumber}&with_genres=${multiple}`
                );
                return await res.data;
            } else if (movieType === 'search') {
                if (!searchItem) return;
                const res = await instance.get(
                    `search/${type}?api_key=${api_key}&language=en-US&query=${searchItem}&page=${pagenumber}&include_adult=false`
                );
                return await res.data;
            }
        } catch (error) {
            console.log(error);
        }
    }
);

export const getGenres = createAsyncThunk(
    'genres',
    async(genreType, thunkAPI) => {
        try {
            if (genreType === 'series') {
                const res = await instance.get(
                    `genre/tv/list?api_key=${api_key}`
                );
                return await res.data;
            }
            if (genreType === 'movies') {
                const res = await instance.get(
                    `genre/movie/list?api_key=${api_key}`
                );
                return await res.data;
            }
        } catch (error) {
            console.log(error);
        }
    }
);

//------Movies Slice Reducer--------------------------------
const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    extraReducers: {
        [getMovies.pending]: (state) => {
            state.isLoading = true;
        },
        [getMovies.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.movies = action.payload;
        },
        [getMovies.rejected]: (state) => {
            state.isLoading = false;
        },
        [getGenres.pending]: (state) => {
            state.isLoading = true;
        },
        [getGenres.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.genres = action.payload;
        },
        [getGenres.rejected]: (state) => {
            state.isLoading = false;
        },
    },
});
export default moviesSlice.reducer;