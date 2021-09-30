import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;

  > main {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    padding: 20px;

    > form {
      padding: 20px;
      border-radius: 4px;
      text-align: center;
      background: #fff;
      box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
        0 1px 5px 0 rgb(0 0 0 / 20%);

      > a {
        font-size: 12px;
        color: #333;
        text-decoration: underline;
        transition: color 0.4s ease;

        &:hover {
          color: #8a8a8a;
        }
      }

      > h3 {
        margin-bottom: 10px;
        font-size: 20px;
      }
    }
  }
`;
