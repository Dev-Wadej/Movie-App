import { configureStore } from '@reduxjs/toolkit';
import MoviesSlice from './features/Movies/MoviesSlice';

export const store = configureStore({
    reducer: { movies: MoviesSlice },
});