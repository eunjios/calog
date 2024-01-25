/** @jsxImportSource @emotion/react */

import Link from 'next/link';
import { css } from '@emotion/react';

interface Props {
  children: React.ReactNode;
}

interface FooterLinkProps extends Props {
  href: string;
}

function Footer({ children }: Props) {
  return (
    <div
      css={css`
        margin: 16px 0;
      `}
    >
      {children}
    </div>
  );
}

function FooterText({ children }: Props) {
  return (
    <span
      css={css`
        font-size: 12px;
        margin: 2px 2px;
        font-weight: 400;
        color: var(--text-light);
      `}
    >
      {children}
    </span>
  );
}

function FooterLink({ children, href }: FooterLinkProps) {
  return (
    <Link
      href={href}
      css={css`
        font-size: 12px;
        margin: 2px 2px;
        font-weight: 500;
        color: var(--text-gray);
        border-bottom: 1px solid var(--text-gray);
      `}
    >
      {children}
    </Link>
  );
}

Footer.Text = FooterText;
Footer.Link = FooterLink;

export default Footer;
