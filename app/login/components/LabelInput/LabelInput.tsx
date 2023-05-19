import { SignupActionKind } from '@/app/hooks/useLogin';
import { ChangeEvent } from 'react';

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
    return (
        <div id="d1" className={styles.container}>
            <label className={styles.label} htmlFor={name}>{labelText}</label>
            <input className={styles.input} type={inputType} value={value} name={name} onChange={e => handleChange(e, SignupActionKind[name.toUpperCase() as 'USERNAME' | 'PASSWORD'])} placeholder={placeholder} />
        </div>
    );
};

export default LabelInput;