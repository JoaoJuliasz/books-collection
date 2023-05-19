import Link from 'next/link';
import React from 'react';

import styles from './actionsBtns.module.scss'


const ActionsBtns = () => {
    return (
        <section id="s3" className={styles.container}>
            <div className={styles.linksContainer}>
                <Link className={styles.forgot} href="/signup">Forgot password?</Link>
                <span className={styles.notMember}>Not a member? <Link className={styles.signUp} href="/signup">Sign Up</Link></span>
            </div>
            <button className={styles.btn}>Sign In</button>
        </section>
    );
};

export default ActionsBtns;