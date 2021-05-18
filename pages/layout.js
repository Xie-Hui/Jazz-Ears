import Head from 'next/head';
import Trumpet from '../utils/jazz-icon.svg';
import layout from '../styles/Layout.module.scss';
import Link from 'next/link';
import { BASE_PATH } from '../constants/env';
export default function Layout({
  withHomeIcon = true,
  withFooter = false,
  children,
}) {
  return (
    <div className={layout.container}>
      <Head>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href={`${BASE_PATH}/favicon.ico?`}
        />
        <title>Jazzy Ears!</title>
      </Head>
      {withHomeIcon && (
        <Link href="/">
          <a className={layout.goHome}>
            <img src={Trumpet} />
            Jazzy Ears!
          </a>
        </Link>
      )}
      <main className={layout.main}>{children}</main>
      {withFooter && (
        <footer className={layout.footer}>
          <div className={layout.footerContent}>
            Developed by{' '}
            <a href="https://github.com/Xie-Hui/Jazz-Ears">Hui Xie</a>
          </div>
        </footer>
      )}
    </div>
  );
}
