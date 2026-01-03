import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.logoContainer}>
          <div className={styles.logoPlaceholder}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" fill="black"/>
              <circle cx="18" cy="18" r="10" stroke="white" strokeWidth="2"/>
            </svg>
          </div>
        </div>
        <div className={styles.mainLogo}>LOGO</div>
        <div className={styles.icons}>
          <span className={styles.icon}>🔍</span>
          <span className={styles.icon}>❤️</span>
          <span className={styles.icon}>👜</span>
          <span className={styles.icon}>👤</span>
          <div className={styles.language}>
            ENG <span>▼</span>
          </div>
        </div>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><a href="#">SHOP</a></li>
          <li><a href="#">SKILLS</a></li>
          <li><a href="#">STORIES</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">CONTACT US</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
