'use client'
import Link from 'next/link';

import logo from '@/public/logo.svg'
import Image from 'next/image';
import SearchField from './SearchField/SearchField';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

import styles from './navbar.module.scss'
import User from './User/User';
import Links from './Links/Links';

const Navbar = () => {

    const pathname = usePathname();
    const hideNavbar = pathname === '/login' || pathname === '/signup'
    const { data: session, status } = useSession()

    if (hideNavbar) return null

    return (
        <nav className={styles.container}>
            <div className={styles.search}>
                <Link href="/">
                    <Image src={logo} alt="logo" />
                </Link>
                <SearchField />
            </div>
            <ul className={`${styles.links} ${status === 'loading' && !session ? styles.loading : styles.loaded}`}>
                <div className={styles.pagesContainer}>
                    <Links />
                </div>
                {status !== 'loading' && !session ?
                    <li className={styles.link}>
                        <Link href="/login">Sign In</Link>
                    </li>
                    : null}
                {session ?
                    <User />
                    : null
                }
            </ul>
        </nav >
    );
};

export default Navbar;