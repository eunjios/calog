import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 40px 0;
  text-align: center;
  width: 100%;
  max-width: 360px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 40px 0;
  }
`;

export const Border = styled.div`
  border-radius: 16px;
  border: 1.6px solid var(--border1);
  padding: 48px 40px 32px;
  min-width: 224px;
`;

export const Title = styled.h2`
  margin: 16px 0 48px 0;
  color: var(--text-dark);
  font-size: 18px;
  line-height: 30px;
  word-break: keep-all;
`;
