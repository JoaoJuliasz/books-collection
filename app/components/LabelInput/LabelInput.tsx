'use client'

import { ChangeEvent, useRef, useState } from 'react';

import styles from './labelInput.module.scss'


type Props = {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: string
    name: 'username' | 'password' | 'confirm_password'
    inputType: string
    labelText: string
}

const LabelInput = ({ handleChange, name, value, labelText, inputType }: Props) => {

    const [focus, setFocus] = useState<boolean>(false)

    const inputRef = useRef<HTMLInputElement | null>(null)

    return (
        <div id="d1" className={styles.container}>
            <label className={`${styles.label} ${(focus || value) ? styles.focus : ''}`} htmlFor={name}>{labelText}</label>
            <input ref={inputRef} className={styles.input} type={inputType} value={value}
                onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
                name={name} onChange={e => handleChange(e)} />
        </div>
    );
};

export default LabelInput;