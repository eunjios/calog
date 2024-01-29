import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const Input = styled.input`
  padding: 0;
  flex-grow: 1;
  line-height: 26px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-dark);
  border: 0;
  border-bottom: 1.6px solid var(--border2);
  outline: none;
  background: transparent;
`;
