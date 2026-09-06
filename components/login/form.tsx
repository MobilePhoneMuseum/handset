'use client';
import {signIn} from 'next-auth/react';
import {useRouter} from 'next/navigation';

import {useState} from 'react';
import {toast} from "@/components/ui/toast";
import AuthForm from "@/components/auth-form";


interface Data {
    email?: string;
    password?: string;
    otp?: string;
}

export default function LoginForm() {
    const router = useRouter();
    const [error, setError] = useState('');
    const handleFormSubmit = async (data: Data) => {
        setError('');
        await toast.promise(
            new Promise<{ name: string }>(async (resolve, reject) => {
                const response = await signIn('credentials', {
                    email: data.email,
                    password: data.password,
                    otp: data.otp,
                    redirect: false,
                });
                if (!response?.error) {
                    resolve({name: "Log in"})
                    router.push('/');
                    router.refresh();
                } else {
                    const errStr = response.status === 401 ? response.error : 'Unknown error occurred; please try again';
                    setError(errStr);
                    reject(errStr);
                }
            }),
            {
                loading: "Logging in...",
                success: "Logged in",
                error: (err: string) => `Log in failed: ${err}`,
            }
        )

    };

    return (
        <>
            <AuthForm
                title="Login here"
                error={error}
                onSubmit={handleFormSubmit}
                buttonText="Login"
            />
        </>
    );
}