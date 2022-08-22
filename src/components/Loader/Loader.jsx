import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return <LoaderContainer></LoaderContainer>;
};

export default Loader;

const LoaderContainer = styled.div`
  --uib-size: 300px;
  --uib-speed: 1s;
  --uib-color: #1c222d;
  position: relative;
  height: var(--uib-size);
  width: var(--uib-size);
  height: 100vh;
  width: 100vh;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: var(--uib-color);
    animation: pulsate var(--uib-speed) linear infinite;
    transform: scale(0);
    opacity: 0;
  }

  &::after {
    animation-delay: calc(var(--uib-speed) / -2);
  }

  @keyframes pulsate {
    0% {
      transform: scale(0);
      opacity: 1;
    }

    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;
