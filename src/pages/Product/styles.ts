import styled from 'styled-components';

export const Container = styled.main``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 20px;
  color: #fff;

  h3,
  p {
    text-align: center;
  }

  > h3 {
    margin-bottom: 5px;
    font-size: 30px;
  }

  > p {
    margin-bottom: 20px;
    font-size: 25px;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    > img {
      width: 65%;
      height: 500px;
    }

    > div {
      display: flex;
      flex-wrap: wrap;
      width: 35%;

      > div {
        width: 100%;
        text-align: center;

        > span {
        }
      }

      > button {
        align-self: flex-end;
        margin: 0 auto;
      }
    }
  }
`;
