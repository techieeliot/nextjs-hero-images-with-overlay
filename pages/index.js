import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hero</title>
      </Head>

      <main className="container">
        <div className="hero">
          <div className="foreground-text-overlay">Content</div>
          <div className="background-with-two-columns">
            <div className="left-column">left column</div>
            <div className="right-column">right column</div>
          </div>
        </div>
      </main>
    </div>
  );
}
