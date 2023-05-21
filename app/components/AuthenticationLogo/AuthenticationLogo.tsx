import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/login-logo.svg'

import styles from './authenticationLogo.module.scss'

type Props = {
    title: string
}

const AuthenticationLogo = ({ title }: Props) => {
    return (
        <section id="s1" className={styles.container}>
            <Link href="/">
                <Image src={logo} alt="logo" />
            </Link>
            <h3>{title}</h3>
        </section>
    );
};

export default AuthenticationLogo;