'use client'
import Link from 'next/link';

import logo from '@/public/logo.svg'
import Image from 'next/image';
import SearchField from './SearchField/SearchField';
import { getSession, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

import styles from './navbar.module.scss'
import User from './User/User';

const Navbar = () => {
    const pathname = usePathname();
    const hideNavbar = pathname === '/login' || pathname === '/signup'


    const { data: session, status } = useSession()

    console.warn(session?.user)
    console.warn(session?.user.name)

    if (hideNavbar) return null

    return (
        <nav className={styles.container}>
            <section className={styles.search}>
                <Link href="/">
                    <Image src={logo} alt="logo" />
                </Link>
                <SearchField />
            </section>
            <section className={styles.links}>
                <div>
                    <Link style={{ margin: '0 0.3em', fontSize: '1.2rem' }} href="/lists">Lists</Link>
                    <Link style={{ margin: '0 0.3em', fontSize: '1.2rem' }} href="/best-sellers">Best Sellers</Link>
                </div>
                {status !== 'loading' && !session ?
                    <div>
                        <Link style={{ fontSize: '1.2rem', margin: '0 1em' }} href="/login">Sign In</Link>
                    </div>
                    : null}
                {session ?
                    <User />
                    : null
                }
            </section>
        </nav >
    );
};

export default Navbar;