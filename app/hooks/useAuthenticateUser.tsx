import { signIn } from 'next-auth/react';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

export const useAuthenticateUser = () => {

    const authenticateUser = useCallback(async (username: string, password: string) => {
        try {
            const result = await signIn('credentials', {
                redirect: false,
                username,
                password,
            })
            if (result?.error) {
                console.log(result.error)
                toast('🦄 Wow so easy!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                // toast.error(result?.error)
            }
        } catch (error) {
            console.log(error)
        }
    }, [])

    return { authenticateUser }

};
