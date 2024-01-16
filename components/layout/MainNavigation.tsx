import Link from 'next/link';
import classes from './MainNavigation.module.css';
import Logo from '../logo/Logo';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/calog">calog</Link>
          </li>
          <li>
            <Link href="/user">me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
