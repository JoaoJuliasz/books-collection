'use client'

import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import user from '@/public/user-loggeed.svg'

import styles from './user.module.scss'


const User = () => {

    const [showSignOut, setShowSignOut] = useState<boolean>(false)

    const handleShowUser = () => {
        setShowSignOut(!showSignOut)
    }

    return (
        <div className={styles.container}>
            <Image src={user} alt="logo" height={30} onClick={handleShowUser} className={styles.img} />
            {showSignOut ?
                <Link className={styles.signOut} href='/api/auth/signout'
                    onClick={e => {
                        e.preventDefault()
                        signOut()
                    }}>Sign Out
                </Link> : null}
        </div>
    );
};

export default User;