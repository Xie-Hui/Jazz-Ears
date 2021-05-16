import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import layout from '../styles/Layout.module.scss';
import Layout from './layout';
import Trumpet from '../public/jazz-icon.svg';

export default function Home() {
  return (
    <Layout withHomeIcon={false}>
      <h1 className={styles.title}>
        <Image src={Trumpet} width={80} height={80} />
        Jazzy Ears!
      </h1>
      <p className={styles.description}>
        Train your ears so you know what others are jazzing about.
      </p>
      <div className={layout.grid}>
        <Link href="/overview">
          <a className={layout.card}>
            <h2>Overview &rarr;</h2>
            <p>Motivation and methodology.</p>
          </a>
        </Link>
        <Link href="/intervals">
          <a className={layout.card}>
            <h2>Intervals &rarr;</h2>
            <p>Nail the building blocks.</p>
          </a>
        </Link>
        <Link href="/chords">
          <a className={layout.card}>
            <h2>Chords &rarr;</h2>
            <p>Engrain the chord tones.</p>
          </a>
        </Link>
        <Link href="/scales">
          <a className={layout.card}>
            <h2>Scales &rarr;</h2>
            <p>Master the scales/modes.</p>
          </a>
        </Link>
      </div>
    </Layout>
  );
}
