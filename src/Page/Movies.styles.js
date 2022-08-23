import styled from 'styled-components';

export const SectionTitleContainer = styled.section `
  display: grid;
  place-items: center;
  font-family: 'Roboto', sans-serif;
  background-color: #39455a;
  color: #fff;
  font-size: 3rem;
  margin-top: 2.5rem;
  @media only screen and (max-width: 900px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
export const MovieGridContainer = styled.div `
  z-index: 0;
  margin: 0 auto;
  width: 90vw;
  display: grid;
  gap: 1.5rem;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const ChipContainer = styled.section `
  width: 90vw;
  margin: 0 auto;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.1em 0.4em;
  margin-top: 2rem;
`;