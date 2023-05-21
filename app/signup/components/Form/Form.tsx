'use client'
import AuthenticationBtns from '@/app/components/AuthenticationBtns/AuthenticationBtns';
import AuthenticationLogo from '@/app/components/AuthenticationLogo/AuthenticationLogo';
import useSignUp, { SignupActionKind } from '@/app/hooks/signup/useSignUp';
import React, { useState } from 'react';
import LabelInput from '@/app/components/LabelInput/LabelInput';

import styles from './form.module.scss'
import { useAuthenticateUser } from '@/app/hooks/login/useAuthenticateUser';


const Form = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [missingProperties, setMissingProperties] = useState<boolean>(false)
    const { state: { username, password, confirmPassword }, handleChange } = useSignUp()
    const { authenticateUser } = useAuthenticateUser()


    const createUser = async () => {
        setLoading(true)
        try {
            const res = await fetch('/api/signup', {
                method: 'POST',
                body: JSON.stringify({ username, password })
            })
            const data = await res.json()
            authenticateUser(username, password)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (password && confirmPassword) {
            createUser()
            setMissingProperties(false)
            return
        }
        setMissingProperties(true)
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <AuthenticationLogo title="Sign Up" />
            <section className={styles.inputSection}>
                <LabelInput handleChange={e => handleChange(e, SignupActionKind.USERNAME)} name={"username"} value={username} labelText={"Username"} inputType={"text"} />
                <LabelInput handleChange={e => handleChange(e, SignupActionKind.PASSWORD)} name={"password"} value={password} labelText={"Password"} inputType={"password"} />
                <LabelInput handleChange={e => handleChange(e, SignupActionKind.CONFIRM_PASSWORD)} name={"confirm_password"} value={confirmPassword} labelText={"Confirm Password"} inputType={"password"} />
                {password !== confirmPassword ? <h3>Passwords are not matching</h3> : null}
            </section>
            <AuthenticationBtns loading={loading} signUpRoute={true} />
        </form>
    );
};
export default Form;