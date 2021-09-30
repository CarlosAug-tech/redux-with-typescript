import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  min-width: 150px;
  padding: 10px;
  margin: 10px 0;
  border: 0;
  border-radius: 6px;
  color: #fff;
  text-align: center;
  background: teal;
  transition: all 0.4s ease;

  &:hover {
    color: #d9d9d9;
    background: #027b7b;
  }

  > svg {
    margin: 0 5px;
  }
`;
