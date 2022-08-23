import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//-----Custom hooks --------------------------------
import { usePaginate } from '../../hooks/usePaginate';

//---Dependencies from material UI
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import PaginatedRounded from '../../components/MaterialUI/Pagination';

//---Redux dependencies --------------------------------
import {
  getMovies,
  getGenres,
} from '../../features/Movies/MoviesSlice';

//-------Built COmponents--------------------------------
import Loader from '../../components/Loader/Loader';
import MovieCard from '../../components/MovieCard/MovieCard';

//-----Styled component styles --------------------------------
import {
  SectionTitleContainer,
  MovieGridContainer,
  ChipContainer,
} from '../Movies.styles';

const Tvseries = () => {
  //------pagination --------------------------------
  const { pagenumber } = usePaginate();

  //---------state to manage the selected gentre --------------------------------
  const [selectedGenre, setselectedGenre] = useState([]);

  const dispatch = useDispatch();

  const handleAdd = (_, selectedItem) => {
    setselectedGenre([...selectedGenre, selectedItem]);
  };

  useEffect(() => {
    dispatch(getGenres('series'));
    dispatch(
      getMovies({
        pagenumber,
        movieType: 'series',
        multiple: selectedGenre.map((genre) => genre.id),
      })
    );
  }, [pagenumber, dispatch, selectedGenre]);

  const { movies, isLoading } = useSelector((state) => state.movies);
  const { genres } = useSelector((state) => state.movies);

  const handleDelete = (selectedItem) => {
    const deleted = selectedGenre.filter(
      (item) => item !== selectedItem
    );
    setselectedGenre(deleted);
  };
  const totaliterable = genres?.genres?.filter(
    (genre) =>
      !selectedGenre.find((selected) => selected.id === genre.id)
  );

  if (isLoading)
    return (
      <SectionTitleContainer>
        <Loader />
      </SectionTitleContainer>
    );
  return (
    <>
      <SectionTitleContainer>DISCOVER MOVIES</SectionTitleContainer>
      <ChipContainer>
        {selectedGenre.map((item) => (
          <Stack key={item.id}>
            <Chip
              id={item.id}
              label={item.name}
              onDelete={() => handleDelete(item)}
              sx={{
                fontSize: '.7rem',
              }}
            />
          </Stack>
        ))}

        {totaliterable.map((genre) => (
          <Stack key={genre.id}>
            <Chip
              id={genre.id}
              label={genre.name}
              onClick={(e) => handleAdd(e, genre)}
              size="small"
              sx={{
                backgroundColor: '#fff',
                color: '#000',
                fontSize: '.7rem',
              }}
            ></Chip>
          </Stack>
        ))}
      </ChipContainer>

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

export default Tvseries;
