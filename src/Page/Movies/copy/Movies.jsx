import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usePaginate } from '../../hooks/usePaginate';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {
  getMovies,
  getGenres,
} from '../../features/Movies/MoviesSlice';
import PaginatedRounded from '../../components/MaterialUI/Pagination';
import Loader from '../../components/Loader/Loader';
import {
  SectionTitleContainer,
  MovieGridContainer,
  ChipContainer,
} from '../Movies.styles';
import MovieCard from '../../components/MovieCard/MovieCard';

const Movies = () => {
  const { pagenumber } = usePaginate();
  const [selectedGenre, setselectedGenre] = useState([]);
  const [genre, setgenre] = useState([]);

  const dispatch = useDispatch();

  // const handleAdd = (_, selectedItem) => {
  //   console.log(selectedItem);
  //   const remaininggenre = genres.genres.filter((item) => {
  //     const result = item.id !== selectedItem.id;
  //     return result;
  //   });
  //   setgenre(remaininggenre);
  //   const remaining = selectedGenre.filter(
  //     (item) => item !== selectedItem
  //   );
  //   setselectedGenre([...remaining, selectedItem]);

  //   dispatch(
  //     getMovies({
  //       movieType: 'movies',
  //       multiple: selectedGenre.map((genre) => genre.id),
  //     })
  //   );
  //   console.log(selectedGenre);
  // };
  ///-------Test
  const handleAdd = (_, selectedItem) => {
    const remaininggenre = genres.genres.filter(
      (item) => item.id !== selectedItem.id
    );
    setgenre(remaininggenre);

    setselectedGenre([...selectedGenre, selectedItem]);
    const remaining = selectedGenre.filter(
      (item) => item !== selectedItem
    );

    dispatch(
      getMovies({
        movieType: 'movies',
        multiple: selectedGenre.map((genre) => genre.id),
      })
    );
    console.log(selectedGenre, remaining);
  };

  useEffect(() => {
    dispatch(getGenres('movies'));
    dispatch(getMovies({ pagenumber, movieType: 'movies' }));
  }, [pagenumber, dispatch]);

  const { movies, isLoading } = useSelector((state) => state.movies);
  const { genres } = useSelector((state) => state.movies);

  const handleDelete = (selectedItem) => {
    const deleted = selectedGenre.filter(
      (item) => item !== selectedItem
    );
    setselectedGenre(deleted);
  };

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
            />
          </Stack>
        ))}

        {genre.length > 0
          ? genre.map((singlegenre) => (
              <Stack key={singlegenre.id}>
                <Chip
                  id={singlegenre.id}
                  label={singlegenre.name}
                  onClick={(e) => handleAdd(e, singlegenre)}
                ></Chip>
              </Stack>
            ))
          : genres?.genres?.map((genre) => (
              <Stack key={genre.id}>
                <Chip
                  id={genre.id}
                  label={genre.name}
                  onClick={(e) => handleAdd(e, genre)}
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

export default Movies;
