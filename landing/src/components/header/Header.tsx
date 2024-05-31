import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss'
import messages from './messages';


function HeaderLink (props: { href: string, name: string} ) {
  return <Link href={props.href}><h1>{props.name}</h1></Link>
}

function HeaderLogo () {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <Image 
          src="/lirapack/logo.png" 
          width={120}
          height={50}
          alt="Picture of the author"
        />
      </Link>
    </div>
  );
}

function Header() {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <HeaderLink href={"/about"} name={messages.about} />
      <HeaderLink href={"/order"} name={messages.order} />
      <HeaderLink href={"/products"} name={messages.products} />
      <HeaderLink href={"/contacts"} name={messages.contacts} />
    </header>
  );
}

export default Header;