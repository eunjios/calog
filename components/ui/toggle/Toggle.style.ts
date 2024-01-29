import styled from '@emotion/styled';

export const AbsoluteContainer = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
`;

export const Content = styled.div`
  width: 100%;
`;

export const Placeholder = styled.p`
  color: var(--text-lighter);
  font-size: 12px;
  font-weight: 500;
  line-height: 28px;
`;

export const Button = styled.button`
  font-family: 'Noto Sans KR';
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 500;
  background: var(--background-light-gray);
  color: var(--text-base);
  border: 0;
  border-radius: 24px;
  cursor: pointer;
  margin-bottom: 4px;
`;
