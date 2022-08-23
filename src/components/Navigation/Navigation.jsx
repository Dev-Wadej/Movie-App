import React from 'react';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        🎥JPLAYSKEYS ENTERTAINMENT HUB🎬
      </NavigationContainer>
      <BottomNavigation>
        <section>
          <div>
            <Link to="/">
              <WhatshotIcon />
            </Link>
            <span>Trending</span>
          </div>
          <div>
            <Link to={'/movies'}>
              <MovieIcon />
            </Link>
            <span>Movies</span>
          </div>
          <div>
            <Link to={'/series'}>
              <TvIcon />
            </Link>
            <span>Tv Series</span>
          </div>
          <div>
            <Link to={'/search'}>
              <SearchIcon />
            </Link>
            <span>Search</span>
          </div>
        </section>
      </BottomNavigation>
      <Outlet />
    </>
  );
};

export default Navigation;

const NavigationContainer = styled.nav`
  font-family: 'DynaPuff', cursive;
  background-color: #39455a;
  color: #fff;
  text-align: center;
  display: grid;
  z-index: 3;
  place-items: center;
  letter-spacing: 4px;
  word-spacing: 5px;
  font-size: 3rem;
  padding: 2rem 0;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 1px 5px #000;
  @media only screen and (max-width: 900px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
const BottomNavigation = styled.div`
  background-color: #2d313a;
  width: 100vw;
  position: fixed;
  z-index: 3;
  bottom: 0;
  left: 0;
  svg {
    font-size: 2rem;
    @media only screen and (max-width: 900px) {
      font-size: 1.5rem;
    }
  }
  div {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    padding: 0.8rem 0;
    align-items: center;
    span {
      display: inline-block;
      font-size: 90%;
      margin-top: 0.5rem;
      @media only screen and (max-width: 900px) {
        font-size: 60%;
      }
    }
  }
  section {
    margin: 0 auto;
    width: 90vw;
    display: flex;
    justify-content: center;
    gap: 9rem;
    @media only screen and (max-width: 900px) {
      gap: 5rem;
    }
    @media only screen and (max-width: 600px) {
      gap: 2rem;
    }
  }
`;
