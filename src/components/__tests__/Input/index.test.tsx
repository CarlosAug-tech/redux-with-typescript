import { render } from '@testing-library/react';
import Input from '../../Input';

const inputProps = {
  type: 'text',
  name: 'name',
  labelText: 'Nome:',
};

describe('Component <Input />', () => {
  it('Input exists in Document', () => {
    const { getByTestId } = render(
      <Input
        type={inputProps.type}
        name={inputProps.name}
        labelText={inputProps.labelText}
      />,
    );

    const inputElement = getByTestId('input-container');

    expect(inputElement).toBeInTheDocument();
  });
});
