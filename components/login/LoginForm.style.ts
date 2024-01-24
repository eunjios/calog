import styled from '@emotion/styled';

export const Form = styled.form`
  width: 100%;
`;

export const Button = styled.button`
  margin-top: 24px;
  width: 100%;
  line-height: 24px;
  padding: 12px 32px;
  border: 1.6px solid transparent;
  border-radius: 32px;
  color: var(--text-white);
  font-family: 'Afacad';
  font-size: 14px;
  font-weight: 500;
  background: var(--button-black);
  cursor: pointer;

  &:hover {
    background: var(--hover-black);
  }
`;
