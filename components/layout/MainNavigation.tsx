import Link from 'next/link';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>calog</div>
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
