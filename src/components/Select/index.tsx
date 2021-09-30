import React, {
  SelectHTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { Container, OptionItem } from './styles';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  selectData: any[];
  firstOption?: string;
  optionSelected: string;
  setOptionSelected: Function;
}

const Select: React.FC<ISelectProps> = ({
  selectData,
  firstOption,
  optionSelected,
  setOptionSelected,
}) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    if (selectData) {
      setData(selectData);
    }
  }, [selectData]);

  return (
    <Container
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        setOptionSelected(e.target.value)
      }
      value={optionSelected}
    >
      {firstOption && <OptionItem value="">{firstOption}</OptionItem>}
      {data.map(option => (
        <OptionItem key={option.id} value={option.id}>
          {option.name}
        </OptionItem>
      ))}
    </Container>
  );
};

export default Select;
