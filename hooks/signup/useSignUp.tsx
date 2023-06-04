import React, { ChangeEvent, useReducer } from 'react';

export enum SignupActionKind {
    USERNAME = 'USERNAME',
    PASSWORD = 'PASSWORD',
    CONFIRM_PASSWORD = 'CONFIRM_PASSWORD'
}

interface SignupAction {
    type: SignupActionKind,
    payload: string
}

interface SignupState {
    username: string,
    password: string
    confirmPassword: string
}

const initialState = {
    username: '',
    password: '',
    confirmPassword: '',
}

const useSignUp = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChange = (e: ChangeEvent<HTMLInputElement>, type: SignupActionKind) => {
        const value = e.target.value
        dispatch({ type, payload: value })
    }

    return { state, handleChange }

};

function reducer(state: SignupState, action: SignupAction) {
    switch (action.type) {
        case SignupActionKind.USERNAME:
            return { ...state, username: action.payload }
        case SignupActionKind.PASSWORD:
            return { ...state, password: action.payload }
        case SignupActionKind.CONFIRM_PASSWORD:
            return { ...state, confirmPassword: action.payload }
        default:
            return state

    }
}

export default useSignUp;