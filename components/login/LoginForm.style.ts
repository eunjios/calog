import styled from '@emotion/styled';

export const Form = styled.form`
  width: 100%;
`;

export const Container = styled.div`
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
`;

export const Input = styled.input`
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
