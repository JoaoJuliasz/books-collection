'use client'

import Link from 'next/link';
import React from 'react';
import { useSession } from 'next-auth/react';

import styles from '../navbar.module.scss'

const Links = () => {

    const { data: session } = useSession()

    return (
        <>
            <li className={styles.link}>
                <Link href="/lists">Lists</Link>
            </li>
            <li className={styles.link}>
                <Link href="/best-sellers">Best Sellers</Link>
            </li>
            {
                session?.user ?
                    <li className={styles.link}>
                        <Link href="/favorites">Favorites</Link>
                    </li>
                    : null
            }
        </>
    );
};

export default Links;