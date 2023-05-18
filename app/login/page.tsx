'use client'
import React, { ChangeEvent, useReducer } from 'react';
import Link from 'next/link'

import { signIn } from 'next-auth/react';

enum SignupActionKind {
    USERNAME = 'USERNAME',
    PASSWORD = 'PASSWORD'
}

interface SignupAction {
    type: SignupActionKind,
    payload: string
}

interface SignupState {
    username: string,
    password: string
}

const initialState = {
    username: "",
    password: ""
}
const Login = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const authenticateUser = async () => {
        console.warn('entrei aq?')
        try {
            const { username, password } = state
            const result = await signIn('credentials', {
                redirect: true,
                username,
                password,
                callbackUrl: '/'
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        dispatch({ type: SignupActionKind.USERNAME, payload: value })
    }
    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        dispatch({ type: SignupActionKind.PASSWORD, payload: value })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        authenticateUser()
    }

    return (
        <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '600px', margin: '0 auto' }}
            onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" onChange={handleUsername} />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={handlePassword} />
            <button>login</button>
            <Link href="/signup">Sign Up</Link>
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

export default Login;