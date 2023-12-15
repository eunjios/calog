// calog page layout

import React from 'react';
import MainNavigation from './MainNavigation';
import classes from './HorizontalLayout.module.css';

interface Props {
  children: React.ReactNode;
}

const HorizontalLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={classes.layout}>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default HorizontalLayout;
