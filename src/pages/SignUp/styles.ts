import styled from 'styled-components';

export const Container = styled.main`
  > form {
    display: grid;
    grid-template-columns: repeat(3fr, minmax(270px, 1fr));
    grid-gap: 10px;
    max-width: 1000px;
    width: 100%;

    > div {
      /* max-width: calc(300px - 20px);
      width: 100%;
      margin: 10px; */
    }

    > h3,
    h5 {
      grid-column: span 3;
      width: 100%;
    }

    > button,
    a {
      grid-column: span 3;
      margin: 0 auto;
    }

    @media (max-width: 1000px) {
      max-width: unset !important;
    }
  }
`;
