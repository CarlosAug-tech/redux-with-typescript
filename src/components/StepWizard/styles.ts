import styled from 'styled-components';

interface IStepWizardProps {
  isActiveStep?: boolean;
  isActiveStepLine?: boolean;
}

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
`;

export const WizardContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
`;

export const WizardItem = styled.div<IStepWizardProps>`
  display: flex;
  justify-content: center;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(to right, teal 50%, #fff 50%);
    background-size: 200% 100%;
    background-position: ${props =>
      props.isActiveStep ? 'left bottom' : 'right bottom'};
    transition: ${props =>
      props.isActiveStep
        ? 'background-position 0.6s ease'
        : 'background-position 0.4s ease'};
  }

  svg {
    color: ${props => (props.isActiveStep ? '#fff' : '#333')};
  }
`;

export const WizardLine = styled.div<IStepWizardProps>`
  width: 100%;
  height: 10px;
  position: relative;
  background: #fff;

  span {
    width: ${props => (props.isActiveStepLine ? '100%' : '0')};
    height: 10px;
    top: 0;
    left: 0;
    position: absolute;
    background: teal;
    transition: ${props =>
      props.isActiveStepLine
        ? 'width 0.4s ease-in-out'
        : 'width 0.6s ease-in-out'};
  }
`;

export const StepButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  margin-top: 20px;

  > button {
    width: 120px;
    padding: 10px;
    border: 0;
    border-radius: 4px;
    color: #fff;
    background: teal;

    &:disabled {
      background: #d9d9d9;
      pointer-events: none;
    }

    &:hover {
      color: #d9d9d9;
      background: #027b7b;
    }
  }
`;
