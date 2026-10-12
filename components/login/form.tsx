'use client';
import {useRouter} from 'next/navigation';
import {useState} from 'react';
import {toast} from "@/components/ui/toast";
import AuthForm from "@/components/auth-form";
import {authClient} from "@/lib/auth/auth-client";

interface Data {
    email?: string;
    password?: string;
    otp?: string;
}

export default function LoginForm() {
    const router = useRouter();
    const [error, setError] = useState('');
    const [showOtp, setShowOtp] = useState(false);

    const handleFormSubmit = async (data: Data) => {
        setError('');
        await toast.promise(
            new Promise<{ name: string }>(async (resolve, reject) => {
                try {
                    const result = await authClient.signIn.credentials({
                        email: data.email || '',
                        password: data.password || '',
                        otp: data.otp,
                    });

                    if (result?.error) {
                        const err = result.error;
                        const errMsg = err.message || 'Unknown error occurred; please try again';
                        const errCode = err.code;

                        if (errCode === 'INVALID_OTP') {
                            setShowOtp(true);
                        } else {
                            setError(errMsg);
                        }
                        reject(errMsg);
                        return;
                    }

                    resolve({name: "Log in"});
                    router.push('/');
                    router.refresh();
                } catch (err: any) {
                    const errMsg = err?.message || 'Unknown error occurred; please try again';
                    const errCode = err?.code;
                    if (errCode === 'INVALID_OTP') {
                        setShowOtp(true);
                    } else {
                        setError(errMsg);
                    }
                    reject(errMsg);
                }
            }),
            {
                loading: "Logging in...",
                success: "Logged in",
                error: (err: string) => `Log in failed: ${err}`,
            }
        );
    };

    return (
        <AuthForm
            title="Log In to MPM Directus"
            error={error}
            showOtp={showOtp}
            onSubmit={handleFormSubmit}
            buttonText={showOtp ? "Verify & Login" : "Login"}
        />
    );
}
