// index page, detail page layout

import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className={classes.layout}>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
}

export default Layout;
