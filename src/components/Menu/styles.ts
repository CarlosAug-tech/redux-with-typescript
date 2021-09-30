import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface IMenuStylesProps {
  isActive: boolean;
  isItemUserProfile?: boolean;
}

export const Container = styled.div<IMenuStylesProps>`
  z-index: 100;
  width: ${props => (props.isActive ? '250px' : '70px')};
  height: 100vh;
  position: fixed;
  background: teal;
  transition: all 0.4s ease;

  & ~ main {
    margin-left: ${props => (props.isActive ? '250px' : '70px')};
    transition: all 0.4s ease;
  }
`;

export const Content = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;

export const Wrapper = styled.div<IMenuStylesProps>`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.isActive ? 'space-between' : 'center')};
  flex-direction: ${props => (props.isActive ? 'row' : 'column')};
  width: 100%;
`;

export const Logo = styled.div<IMenuStylesProps>`
  display: ${props => (props.isActive ? 'flex' : 'none')};
`;

export const ButtonMenu = styled.button<IMenuStylesProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  position: relative;
  border: 0;
  background: transparent;

  > span {
    width: 100%;
    height: 2px;
    background: #fff;
    transition: all 0.4s ease;

    &:nth-child(1),
    &:nth-child(3) {
      left: 0;
      position: absolute;
    }

    &:nth-child(1) {
      bottom: 20px;
      transform: ${props =>
        props.isActive ? 'rotate(45deg) translate(5px, 5px)' : ''};
    }

    &:nth-child(2) {
      ${props =>
        props.isActive &&
        css`
          display: none;
        `}
    }

    &:nth-child(3) {
      top: 20px;
      transform: ${props =>
        props.isActive ? 'rotate(-45deg) translate(4px, -4px)' : ''};
    }
  }
`;

export const MenuWrapper = styled.ul<IMenuStylesProps>`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.isActive ? 'space-between' : 'center')};
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
`;

export const MenuItem = styled.li<IMenuStylesProps>`
  width: 100%;
  margin: 5px 0;
  position: relative;

  &:hover {
    & > div {
      opacity: 1;
      visibility: visible;
      transform: translateX(0px);
    }
  }

  & > div {
    z-index: -1;
    min-width: 60px;
    padding: 5px;
    top: 10px;
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
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: ${props => (props.isActive ? 'unset' : 'center')};
    padding: 10px;
    position: relative;
    color: #fff;
    transition: all 0.4s ease;

    > span {
      position: absolute;
      opacity: ${props => (props.isActive ? '1' : '0')};
      left: ${props => (props.isActive ? '40px' : '0')};
      transition: all 0.4s ease;
      pointer-events: none;
    }

    ${props =>
      !props.isActive &&
      css`
        &:hover {
          border-radius: 10px;
          color: #333;
          background: #fff;
          box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%),
            0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
        }
      `}
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 180px !important;
  right: -205px !important;
`;

export const DropdownItem = styled(Link)`
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

export const NotifyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  top: 0px;
  right: 2px;
  position: absolute;
  border-radius: 50%;
  background: orange;

  > span {
    font-size: 12px;
    color: #fff;
  }
`;
