import { signIn } from 'next-auth/react';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';


export const useAuthenticateUser = () => {

    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const router = useRouter()

    const authenticateUser = useCallback(async (username: string, password: string) => {
        setLoading(true)
        try {
            const result = await signIn('credentials', {
                redirect: false,
                username,
                password,
            })
            if (result?.error) {
                throw new Error(result.error);
            }
            router.push('/')
        } catch (error: any) {
            setError(error.message)
            toast.error(error.message)
        } finally {
            setLoading(false)

        }
    }, [router])

    return { loading, error, authenticateUser }

};
