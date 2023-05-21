'use client'
import AuthenticationBtns from '@/app/components/AuthenticationBtns/AuthenticationBtns';
import AuthenticationLogo from '@/app/components/AuthenticationLogo/AuthenticationLogo';
import useSignUp, { SignupActionKind } from '@/app/hooks/signup/useSignUp';
import React, { useState } from 'react';
import LabelInput from '@/app/components/LabelInput/LabelInput';

import styles from './form.module.scss'
import { useCreateUser } from '@/app/hooks/signup/useCreateUser';


const Form = () => {

    const [missingProperties, setMissingProperties] = useState<boolean>(false)
    const { state: { username, password, confirmPassword }, handleChange } = useSignUp()
    const { loading, createUser } = useCreateUser()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (password && confirmPassword) {
            createUser(username, password)
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