import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  MovieGridContainer,
  SectionTitleContainer,
} from '../Movies.styles';
import MovieCard from '../../components/MovieCard/MovieCard';
import PaginatedRounded from '../../components/MaterialUI/Pagination';
import { usePaginate } from '../../hooks/usePaginate';
import { getMovies } from '../../features/Movies/MoviesSlice';
import Loader from '../../components/Loader/Loader';

const Search = () => {
  const [tabContent, settabContent] = useState('movie');
  const [searched, setSearched] = useState('');
  const dispatch = useDispatch();
  const { paginate } = usePaginate();
  const { isLoading, movies } = useSelector((state) => state.movies);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearched(e.target.elements[0].value);
  };
  const handleClick = (e) => {
    if (!e.target.previousSibling.children) return;
    setSearched(
      e.target.previousSibling.children[1].firstElementChild.value
    );
  };

  useEffect(() => {
    dispatch(
      getMovies({
        movieType: 'search',
        type: tabContent,
        searchItem: searched,
        paginate,
      })
    );
  }, [searched, dispatch, paginate, tabContent]);

  if (isLoading)
    return (
      <SectionTitleContainer>
        <Loader />
      </SectionTitleContainer>
    );
  return (
    <>
      <SearchContainer>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            id="filled-basic"
            label="Search"
            variant="filled"
            sx={{
              width: '80vw',
              color: 'text.primary',
              borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
            }}
          />
          <SearchIcon
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
          />
        </Box>
      </SearchContainer>
      <TabbedButton>
        <Button
          onClick={() => settabContent('movie')}
          active={`${tabContent === 'movie' ? 'active' : ''}`}
        >
          SEARCH MOVIES
        </Button>
        <Button
          onClick={() => settabContent('tv')}
          active={`${tabContent === 'tv' ? 'active' : ''}`}
        >
          SEARCH TV SERIES
        </Button>
      </TabbedButton>
      {movies?.results && (
        <>
          <MovieGridContainer>
            {movies?.results?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </MovieGridContainer>
          <SectionTitleContainer>
            <PaginatedRounded />
          </SectionTitleContainer>
        </>
      )}
    </>
  );
};

export default Search;

const TabbedButton = styled.div`
  width: 90vw;
  margin: 0 auto;
  gap: 4rem;
  display: flex;
  align-items: start;
`;
const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 1rem;
  border-bottom: ${(props) =>
    props.active ? '2px solid #fff' : 'none'};
  background: transparent;
  font-size: 1.1rem;
  color: white;
  opacity: 0.8;
`;

const SearchContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 5rem;
  width: 90vw;
  display: flex;

  margin-top: 4rem;
  justify-content: center;

  svg {
    font-size: 2.5rem;
    color: #000;
    background-color: #fff;
    opacity: 0.8;
    padding: 0.4rem;
    margin-left: 1rem;
    border-radius: 0.3rem;
  }
`;
