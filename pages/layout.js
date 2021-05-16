import Head from 'next/head';
import Image from 'next/image';
import layout from '../styles/Layout.module.scss';
import Trumpet from '../public/jazz-icon.svg';
import Link from 'next/link';
export default function Layout({ withHomeIcon = true, children }) {
  return (
    <div className={layout.container}>
      <Head>
        <title>Jazzy Ears!</title>
      </Head>
      {withHomeIcon && (
        <Link href="/index">
          <a className={layout.goHome}>
            <Image src={Trumpet} alt="Trumpet Icon" width={36} height={40} />
            Jazzy Ears!
          </a>
        </Link>
      )}
      <main className={layout.main}>{children}</main>
      {/* <footer>Hui Xie</footer> */}
    </div>
  );
}
