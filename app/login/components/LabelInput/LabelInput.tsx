'use client'

import { ChangeEvent, useRef, useState } from 'react';
import { SignupActionKind } from '@/app/hooks/useLogin';

import styles from './labelInput.module.scss'


type Props = {
    handleChange: (e: ChangeEvent<HTMLInputElement>, type: SignupActionKind) => void
    value: string
    name: 'username' | 'password'
    inputType: string
    labelText: string
    placeholder: string
}

const LabelInput = ({ handleChange, name, value, labelText, placeholder, inputType }: Props) => {

    const [focus, setFocus] = useState<boolean>(false)

    const inputRef = useRef<HTMLInputElement | null>(null)

    return (
        <div id="d1" className={styles.container}>
            <label className={`${styles.label} ${(focus || value) ? styles.focus : ''}`} htmlFor={name}>{labelText}</label>
            <input ref={inputRef} className={styles.input} type={inputType} value={value}
                onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
                name={name} onChange={e => handleChange(e, SignupActionKind[name.toUpperCase() as 'USERNAME' | 'PASSWORD'])} />
        </div>
    );
};

export default LabelInput;