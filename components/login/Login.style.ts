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

export const Title = styled.h2`
  margin: 16px 0 48px 0;
  color: #333;
  font-size: 18px;
  line-height: 30px;
  word-break: keep-all;
`;
