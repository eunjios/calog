// test

import styled from '@emotion/styled';

export const GradientContainer = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background: linear-gradient(180deg, transparent 0, var(--text-white) 60%);
  }
`;
