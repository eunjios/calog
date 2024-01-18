import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  margin: 16px 0;
`;

export const Input = styled.input`
  display: none;
`;

export const Button = styled.button`
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1.2px solid #ed6f6f;
  border-radius: 100%;
  color: #ed6f6f;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
