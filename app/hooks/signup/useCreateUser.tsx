import React, { useCallback, useState } from 'react';
import { useAuthenticateUser } from '../login/useAuthenticateUser';

export const useCreateUser = () => {

    const [loading, setLoading] = useState<boolean>(false)

    const { authenticateUser } = useAuthenticateUser()


    const createUser = useCallback(async (username: string, password: string) => {
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
    }, [authenticateUser])

    return { loading, createUser }
};