import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10px;

  &:hover {
    & > div > div {
      opacity: 1;
      visibility: visible;
      transform: translateX(0px);
    }
  }
`;

export const Content = styled.div`
  > img {
    cursor: pointer;
    width: 50px;
    height: 50px;
    position: relative;
    border-radius: 50%;
    background: #d9d9d9;
    background-size: cover;
  }
`;

export const DropdownContainer = styled.div`
  z-index: -1;
  display: flex;
  flex-direction: column;
  width: 150px;
  right: -165px !important;
  padding: 10px 5px;
  top: 60px;
  right: -85px;
  position: absolute;
  border-radius: 4px;
  background: #fff;
  opacity: 0;
  visibility: hidden;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);
  transform: translateX(-100%);
  transition: all 0.4s ease;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 2px;
    left: 3px;
    border: 8px solid black;
    border-color: transparent transparent #fff #fff;
    transform-origin: 0 0;
    transform: rotate(45deg);
    box-shadow: -3px 3px 3px 0 rgba(0, 0, 0, 12%);
  }
`;

export const DropdownItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 5px;
  color: #333;
  transition: color 0.4s ease;

  & + a {
    margin-top: 3px;
    border-top: 1px solid #6666;
  }

  &:hover {
    color: #d6d6d6;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: 0;
    color: #333;
    background: transparent;
    transition: color 0.4s ease;

    &:hover {
      color: #d6d6d6;
    }
  }
`;
