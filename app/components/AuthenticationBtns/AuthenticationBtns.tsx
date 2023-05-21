import Link from 'next/link';
import React from 'react';

import styles from './actionsBtns.module.scss'

type Props = {
    loading: boolean
    signUpRoute?: boolean
}


const AuthenticationBtns = ({ loading, signUpRoute }: Props) => {

    const btnLabel = () => {
        if(!loading) {
            return !signUpRoute ? 'Sign In' : 'Sign Up'
        }
        return 'Loading...'
    }

    return (
        <section id="s3" className={styles.container}>
            <div className={styles.linksContainer}>
                {!signUpRoute ? <Link className={styles.forgot} href="/signup">Forgot password?</Link> : null}
                <span className={styles.notMember}>{!signUpRoute ? 'Not a member? ' : 'Already a member? '}
                    <Link className={styles.signUp} href={!signUpRoute ? "/signup" : "/login"}>{!signUpRoute ? 'Sign Up' : 'Sign In'}</Link>
                </span>
            </div>
            <button disabled={loading} className={styles.btn}>{btnLabel()}</button>
        </section>
    );
};

export default AuthenticationBtns;