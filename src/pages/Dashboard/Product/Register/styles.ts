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

    > select,
    textarea {
      margin: 20px 0;
    }
  }
`;

export const ImageUpload = styled.div`
  align-self: center;
  margin: 20px 0;
  position: relative;

  > img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: #d9d9d9;
  }

  > input[type='file'] {
    display: none;
  }

  > label {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    bottom: 3px;
    right: 3px;
    position: absolute;
    border-radius: 50%;
    background: teal;

    > svg {
      color: #fff;
      transition: color 0.4s ease;
    }

    &:hover {
      > svg {
        color: #d6d6d6;
      }
    }
  }
`;
