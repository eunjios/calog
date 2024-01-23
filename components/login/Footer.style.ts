import { css } from '@emotion/react';

export const container = css`
  margin-top: 16px;
`;

export const links = css`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
`;

export const link = css`
  font-size: 12px;
  font-weight: 500;
  & a {
    color: #a4a4a4;
  }
`;

export const text = css`
  font-size: 12px;
  margin: 2px 4px;
`;

export const base = css`
  font-weight: 400;
  color: #a4a4a4;
`;

export const emp = css`
  font-weight: 500;
  color: #717171;
  border-bottom: 1px solid #717171;
`;
