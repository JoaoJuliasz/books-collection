'use client'

import { SignInActionKind, useLogin } from '@/hooks/login/useLogin';
import React from 'react';
import LabelInput from '@/app/components/LabelInput/LabelInput';

import { useAuthenticateUser } from '@/hooks/login/useAuthenticateUser';

import styles from './form.module.scss'
import AuthenticationLogo from '@/app/components/AuthenticationLogo/AuthenticationLogo';
import AuthenticationBtns from '@/app/components/AuthenticationBtns/AuthenticationBtns';


const Form = () => {

    const { state: { username, password }, handleChange } = useLogin()
    const { loading, error, authenticateUser } = useAuthenticateUser()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        authenticateUser(username, password)
    }

    return (
        <form className={styles.container}
            onSubmit={handleSubmit}>
            <AuthenticationLogo title="Sign In" />
            <section id="s2" className={styles.inputSection}>
                <LabelInput handleChange={e => handleChange(e, SignInActionKind.USERNAME)} name={"username"} value={username} labelText={"Username"} inputType={"text"} />
                <LabelInput handleChange={e => handleChange(e, SignInActionKind.PASSWORD)} name={"password"} value={password} labelText={"Password"} inputType={"password"} />
                {error ? <h3>{error}</h3> : null}
            </section>
            <AuthenticationBtns loading={loading} />
        </form>
    );
};

export default Form;