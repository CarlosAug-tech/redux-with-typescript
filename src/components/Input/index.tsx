import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons';
import InputMask from 'react-input-mask';
import CurrencyInput from 'react-currency-masked-input';
import { formatPrice } from '../../utils/formatPrice';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  labelText: string;
  isMaskCurrency?: boolean;
  isMask?: boolean;
  multiline?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<IInputProps> = ({
  type,
  labelText,
  name,
  icon: Icon,
  isMaskCurrency,
  multiline,
  ...rest
}) => {
  const ref = useRef(null);
  const { fieldName, registerField, error, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name,
      ref: ref.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [registerField, fieldName]);

  return (
    <Container isIcon={!!Icon} data-testid="input-container">
      {isMaskCurrency ? (
        <CurrencyInput
          ref={ref}
          type={type}
          name={name}
          placeholder=" "
          defaultValue={defaultValue}
          {...rest}
        />
      ) : (
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder=" "
          defaultValue={defaultValue}
          {...rest}
        />
      )}
      <label htmlFor="">{labelText}</label>
      {Icon && <Icon size={18} />}
    </Container>
  );
};

export default Input;
