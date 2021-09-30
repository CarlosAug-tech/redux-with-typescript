import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  > form {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    padding: 20px;
    border-radius: 4px;
    background: #fff;

    > h3 {
      text-align: center;
    }
  }
`;
