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
  background: #f4f4f4;
  padding: 12px 24px;
`;

export const Input = styled.input`
  width: 100%;
  line-height: 24px;
  border: none;
  background: transparent;
  outline: none;
  color: #333;
  font-family: 'Afacad';
  font-size: 16px;

  &::placeholder {
    color: #aeaeae;
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
  color: #fff;
  font-family: 'Afacad';
  font-size: 14px;
  font-weight: 500;
  background: #111;
  cursor: pointer;

  &:hover {
    background: #2a2a2a;
  }
`;
