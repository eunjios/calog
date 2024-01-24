/** @jsxImportSource @emotion/react */

import { HTMLInputTypeAttribute } from 'react';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';
import { css } from '@emotion/react';

interface Props<TFormInput extends FieldValues = FieldValues> {
  /**
   * react-icons
   */
  icon: React.ReactNode;

  /**
   * react-hook-form
   * <input {...register(name), { required }} />
   */
  name: Path<TFormInput>;
  register: UseFormRegister<TFormInput>;
  required?: boolean;

  /**
   * input properties
   */
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
}

function MainInput<TFormInput extends FieldValues = FieldValues>({
  icon,
  name,
  register,
  required = false,
  ...props
}: Props<TFormInput>) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        width: 100%;
        margin-bottom: 8px;
        border: 1.6px solid transparent;
        border-radius: 32px;
        background: var(--background-light-gray);
        padding: 12px 24px;
      `}
    >
      {icon}
      <input
        css={css`
          width: 100%;
          line-height: 24px;
          border: none;
          background: transparent;
          outline: none;
          color: var(--text-dark);
          font-family: 'Afacad';
          font-size: 16px;
          &::placeholder {
            color: var(--text-lighter);
            font-size: 14px;
          }
        `}
        {...register(name, { required })}
        {...props}
      />
    </div>
  );
}

export default MainInput;
