import styled from 'styled-components';

export const Container = styled.div`
  min-height: 500px;

  > form {
    display: grid;
    grid-template-columns: repeat(3fr, minmax(270px, 1fr));
    grid-gap: 10px;
    max-width: 1000px;
    width: 100%;
    margin: auto;
    padding: 20px;
    border-radius: 4px;
    background: #fff;

    > h3,
    h5 {
      grid-column: span 3;
      width: 100%;
      text-align: center;
    }

    > button,
    a {
      grid-column: span 3;
      justify-content: center;
      margin: 0 auto;
    }

    @media (max-width: 1000px) {
      max-width: unset !important;
    }
  }
`;
