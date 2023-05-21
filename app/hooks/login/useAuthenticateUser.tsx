import { signIn } from 'next-auth/react';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';


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
                console.log(result.error)
                setError(result.error)
            }
            setLoading(false)
            if (!result?.error) router.push('/')
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }, [router])

    return { loading, error, authenticateUser }

};
