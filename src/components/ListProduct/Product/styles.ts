import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  > img {
    width: 100%;
    height: 200px;
  }

  > div {
    margin: 5px 0;
    > strong {
      margin: 5px 0;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    > p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  > strong {
    margin: 5px 0;
    text-align: right;
  }

  > a {
    align-self: center;
    margin-top: auto;

    > button {
      margin: 0;
    }
  }
`;

export const Content = styled.div``;
