import React, { useEffect } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import {
  SectionTitleContainer,
  MovieGridContainer,
} from '../Movies.styles';
import { getMovies } from '../../features/Movies/MoviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { usePaginate } from '../../hooks/usePaginate';
import PaginatedRounded from '../../components/MaterialUI/Pagination';
import Loader from '../../components/Loader/Loader';

const Trending = () => {
  const { pagenumber } = usePaginate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies({ pagenumber, movieType: 'trending' }));
  }, [pagenumber, dispatch]);
  const { movies, isLoading } = useSelector((state) => state.movies);
  console.log(movies);
  if (isLoading)
    return (
      <SectionTitleContainer>
        <Loader />
      </SectionTitleContainer>
    );

  return (
    <>
      <SectionTitleContainer>TRENDING TODAY</SectionTitleContainer>
      <MovieGridContainer>
        {movies?.results?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MovieGridContainer>
      <SectionTitleContainer>
        <PaginatedRounded />
      </SectionTitleContainer>
    </>
  );
};

export default Trending;
