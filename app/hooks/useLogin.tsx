import { ChangeEvent, useCallback, useReducer } from 'react';

export enum SignupActionKind {
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

export const useLogin = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>, type: SignupActionKind) => {
        const value = e.target.value
        dispatch({ type: type, payload: value })
    }, [])

    return { state, handleChange }
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