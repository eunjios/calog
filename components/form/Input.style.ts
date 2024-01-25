import { css } from '@emotion/react';

export const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  margin-bottom: 8px;
  border-radius: 32px;
  padding: 12px 24px;
  transition:
    border 0.2s,
    box-shadow 0.2s;
`;

export const gray = css`
  border: 1.6px solid transparent;
  background: var(--background-light-gray);
`;

export const white = css`
  border: 1.6px solid var(--border1);
  background: transparent;
`;

export const invalid = css`
  border: 1.6px solid var(--primary0);
  box-shadow: 0 0px 8px var(--primary0);
`;

export const input = css`
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

export const msg = css`
  text-align: left;
  font-size: 12px;
  color: var(--primary1);
  font-weight: 400;
  padding: 0 8px 8px;
`;
