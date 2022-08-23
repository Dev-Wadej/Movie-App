import React from 'react';
import styled from 'styled-components';
const MovieCard = ({ movie }) => {
  return (
    <Moviecontainer>
      <RatingContainer
        style={{ color: 'white', padding: ' 0.1rem .7rem' }}
        rating={movie.vote_average > 5 ? true : false}
      >
        {movie.vote_average.toFixed(1)}
      </RatingContainer>
      <MovieImage>
        <img
          src={`https://image.tmdb.org/t/p/w300${
            movie.poster_path
              ? movie.poster_path
              : movie.backdrop_path
          }`}
          alt={movie.title}
        />
      </MovieImage>
      <small>{movie.title ? movie.title : movie.name}</small>
      <span>
        {movie.title ? 'Movies' : `TV Series`}
        <span>
          {movie.release_date
            ? movie.release_date
            : movie.first_air_date}
        </span>
      </span>
    </Moviecontainer>
  );
};

export default MovieCard;

const Moviecontainer = styled.section`
  background-color: #282c34;
  border-radius: 0.3rem;
  position: relative;
  padding: 0.2rem;
  margin-top: 2rem;
  cursor: pointer;
  small,
  span {
    display: block;
  }
  small {
    display: grid;
    place-items: center;
    opacity: 0.8;
    margin-bottom: 0.5rem;
    text-align: center;
    font-size: 90%;
    width: 12rem;
  }
  span {
    display: flex;
    justify-content: space-between;
    padding: 0.2rem;
    color: #6c6f74;
    font-size: 90%;
  }
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
const MovieImage = styled.div`
  width: 14rem;
  height: 20rem;
  border-radius: 0.8rem;
  overflow: hidden;
  margin-bottom: 0.3rem;
  padding: 0.3rem;
  @media only screen and (max-width: 900px) {
    width: 12rem;
    height: 18rem;
  }
  img {
    border-radius: 0.8rem;
    width: 100%;
    height: 100%;
    display: inline-block;
  }
`;
const RatingContainer = styled.span`
  position: absolute;
  top: 0;
  right: -0.8rem;
  background-color: #3f51b5;

  background-color: ${(props) =>
    props.rating ? '#3f51b5' : '#f50057'};
  border-radius: 8rem;
  font-size: 0.7rem !important;
`;
