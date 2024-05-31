import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/"><h1>Home</h1></Link>
      <Link href="/about"><h1>About</h1></Link>
      <Link href="/order"><h1>Order</h1></Link>
      <Link href="/products"><h1>Products</h1></Link>
    </header>
  );
}