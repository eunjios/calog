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
  border: 1.2px solid var(--primary1);
  border-radius: 100%;
  color: var(--primary1);
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
