import axios from 'axios';
import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useAuthenticateUser } from '../login/useAuthenticateUser';

export const useCreateUser = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    const { authenticateUser } = useAuthenticateUser()

    const createUser = useCallback(async (username: string, password: string) => {
        setLoading(true);
        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                const errorMessage = await response.json();
                throw new Error(errorMessage.error);
            }
            
            await response.json();
            authenticateUser(username, password);
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }, [authenticateUser]);


    return { loading, createUser }
};