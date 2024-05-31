import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss'
import messages from './messages';


function HeaderLink (props: { href: string, name: string} ) {
  return <Link href={props.href}><h1>{props.name}</h1></Link>
}

function Header() {
  return (
    <header className={styles.header}>
      <HeaderLink href={"/"} name={messages.main} />
      <HeaderLink href={"/about"} name={messages.about} />
      <HeaderLink href={"/order"} name={messages.order} />
      <HeaderLink href={"/products"} name={messages.products} />
    </header>
  );
}

export default Header;