import styled from 'styled-components';

interface IInputStylesProps {
  isIcon: boolean;
}

export const Container = styled.div<IInputStylesProps>`
  width: 100%;
  position: relative;
  margin: 10px 0;

  > input {
    width: 100%;
    padding: ${props =>
      props.isIcon ? '16px 16px 16px 40px' : '16px 16px 16px 20px'};
    border: 1px solid #333;
    border-radius: 4px;

    &:focus ~ label,
    &:not(:placeholder-shown) ~ label {
      padding: 3px 5px;
      top: -12px;
      left: 8px;
      color: teal;
      background: #fff;
    }

    &:focus ~ svg,
    &:not(:placeholder-shown) ~ svg {
      color: teal;
    }
  }

  > label {
    top: 18px;
    left: ${props => (props.isIcon ? '41px' : '21px')};
    position: absolute;
    transition: all 0.4s ease;
    pointer-events: none;
  }

  > svg {
    top: 17px;
    left: 14px;
    position: absolute;
    transition: color 0.4s ease;
  }
`;
