/** @jsxImportSource @emotion/react */

import { HTMLInputTypeAttribute } from 'react';
import {
  UseFormRegister,
  RegisterOptions,
  FieldValues,
  Path,
} from 'react-hook-form';

import { container, gray, input, invalid, msg, white } from './Input.style';

export interface InputProps<TFormInput extends FieldValues = FieldValues> {
  /**
   * react-icons
   */
  icon?: React.ReactNode;

  /**
   * react-hook-form
   * <input {...register(name), { required }} />
   */
  name: Path<TFormInput>;
  register: UseFormRegister<TFormInput>;
  registerOptions?: RegisterOptions;
  required?: boolean;

  /**
   * input properties
   */
  type?: HTMLInputTypeAttribute;
  placeholder?: string;

  /**
   * input style
   */
  theme?: 'gray' | 'white';
  message?: string;
}

function Input<TFormInput extends FieldValues = FieldValues>({
  icon,
  name,
  register,
  required = false,
  theme = 'gray',
  message,
  ...props
}: InputProps<TFormInput>) {
  const color = theme === 'gray' ? gray : white;
  const warning = message ? invalid : null;

  return (
    <>
      <div css={[container, color, warning]}>
        {icon}
        <input css={input} {...register(name, { required })} {...props} />
      </div>
      {message && <p css={msg}>{message}</p>}
    </>
  );
}

export default Input;
