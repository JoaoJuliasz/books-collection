'use client'

import { useLogin } from '@/app/hooks/useLogin';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ActionsBtns from '../ActionsBtns/ActionsBtns';
import LabelInput from '../LabelInput/LabelInput';

import logo from '@/public/login-logo.svg'
import { useAuthenticateUser } from '@/app/hooks/useAuthenticateUser';

import styles from './form.module.scss'


const Form = () => {

    const { state: { username, password }, handleChange } = useLogin()
    const { authenticateUser } = useAuthenticateUser()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        authenticateUser(username, password)
    }

    return (
        <form className={styles.container}
            onSubmit={handleSubmit}>
            <section id="s1" className={styles.logoSection}>
                <Link href="/">
                    <Image src={logo} alt="logo" />
                </Link>
                <h3>Sign In</h3>
            </section>
            <section id="s2" style={{ width: '100%' }}>
                <LabelInput handleChange={handleChange} name={"username"} value={username} labelText={"Username"} placeholder={"Jane Doe"} inputType={"text"} />
                <LabelInput handleChange={handleChange} name={"password"} value={password} labelText={"Password"} placeholder={"•••••••••"} inputType={"password"} />
            </section>
            <ActionsBtns />
        </form>
    );
};

export default Form;