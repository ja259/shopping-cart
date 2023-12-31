import React from 'react';
import { Link } from 'react-router-dom';
import { BsCodeSlash } from 'react-icons/bs';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.root}>
      <Link to="/shop">
        <button className={styles['white-btn']}>View Catalog</button>
      </Link>
      <a
        className={styles.github}
        href="https://github.com/ja259/shopping-cart"
      >
        <BsCodeSlash />
      </a>
    </div>
  );
}

export default Home;