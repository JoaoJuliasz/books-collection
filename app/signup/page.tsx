'use client'
import React, { ChangeEvent, useReducer } from 'react';

enum SignupActionKind {
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

const Signup = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChange = (e: ChangeEvent<HTMLInputElement>, type: SignupActionKind) => {
        const value = e.target.value
        dispatch({ type, payload: value })
    }

    const createUser = async () => {
        try {
            const { username, password } = state
            const res = await fetch('/api/signup', {
                method: 'POST',
                body: JSON.stringify({ username, password })
            })
            const data = await res.json()
            console.log(data)
        } catch(error) {
            console.log(error)
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        createUser()
    }

    return (
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" onChange={(e) => handleChange(e, SignupActionKind.USERNAME)} />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={(e) => handleChange(e, SignupActionKind.PASSWORD)} />
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" name="conirm-password" onChange={(e) => handleChange(e, SignupActionKind.CONFIRM_PASSWORD)} />
            <button>create user</button>
        </form>
    );
};

function reducer(state: SignupState, action: SignupAction) {
    switch (action.type) {
        case SignupActionKind.USERNAME:
            return { ...state, username: action.payload }
        case SignupActionKind.PASSWORD:
            return { ...state, password: action.payload }
        default:
            return state

    }
}

export default Signup;