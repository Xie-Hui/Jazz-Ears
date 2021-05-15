import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Jazzy Ears</title>
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Jazzy Ears!</h1>

				<p className={styles.description}>Ear training tool that focused on Jazz improvisation.</p>

				<div className={styles.grid}>
					<Link href='/overview'>
						<a className={styles.card}>
							<h2>Overview &rarr;</h2>
							<p>Motivation and methodology.</p>
						</a>
					</Link>
					<Link href='/intervals'>
						<a className={styles.card}>
							<h2>Intervals &rarr;</h2>
							<p>Nail the building blocks.</p>
						</a>
					</Link>
					<Link href='/chords'>
						<a className={styles.card}>
							<h2>Chords &rarr;</h2>
							<p>Engrain the chord tones.</p>
						</a>
					</Link>
					<Link href='/scales'>
						<a className={styles.card}>
							<h2>Scales &rarr;</h2>
							<p>Master the scales/modes.</p>
						</a>
					</Link>
				</div>
			</main>
		</div>
	);
}
