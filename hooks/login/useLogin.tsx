import { ChangeEvent, useCallback, useReducer } from 'react';

export enum SignInActionKind {
    USERNAME = 'USERNAME',
    PASSWORD = 'PASSWORD'
}

interface SignInAction {
    type: SignInActionKind,
    payload: string
}

interface SignInState {
    username: string,
    password: string
}

const initialState = {
    username: "",
    password: ""
}

export const useLogin = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>, type: SignInActionKind) => {
        const value = e.target.value
        dispatch({ type: type, payload: value })
    }, [])

    return { state, handleChange }
};

function reducer(state: SignInState, action: SignInAction) {
    switch (action.type) {
        case SignInActionKind.USERNAME:
            return { ...state, username: action.payload }
        case SignInActionKind.PASSWORD:
            return { ...state, password: action.payload }
        default:
            return state

    }
}