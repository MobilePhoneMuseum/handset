import * as React from 'react';
import {FormEvent, useState} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "./ui/card";
import {Field, FieldGroup, FieldLabel} from "./ui/field";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {Alert, AlertTitle} from "./ui/alert";
import {UserWarning01Icon} from "@hugeicons/core-free-icons";
import {HugeiconsIcon} from "@hugeicons/react";

interface Data {
    email: string;
    password: string;
    otp?: string;
}

interface AuthFormProps {
    title: string;
    error?: string;
    buttonText: string;
    onSubmit: (data: Data) => void;
    className?: string,
}

export default function AuthForm({
                                     title,
                                     error,
                                     buttonText,
                                     onSubmit,
                                     className,
                                     ...props
                                 }: AuthFormProps) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        otp: '',
    });

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Login to MPM Directus</CardTitle>
                    <CardDescription>
                        Use <b>Directus</b> credentials, please.
                    </CardDescription>
                </CardHeader>
                {error ?
                    <CardContent>
                        <Alert variant="destructive" className="max-w-md">
                            <HugeiconsIcon icon={UserWarning01Icon} strokeWidth={2}/>
                            <AlertTitle>{error}</AlertTitle>
                        </Alert>
                    </CardContent> : null
                }
                <CardContent>
                    <form onSubmit={handleFormSubmit}>
                        <FieldGroup>
                            <Field>
                                <div className="flex items-center">
                                    <FieldLabel htmlFor="email">Email</FieldLabel>
                                </div>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="me@example.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Field>
                            <Field>
                                <div className="flex items-center">
                                    <FieldLabel htmlFor="password">Password</FieldLabel>
                                </div>
                                <Input id="password" name="password" type="password" value={formData.password}
                                       onChange={handleInputChange} required/>
                            </Field>
                            <Field>
                                <div className="flex items-center">
                                    <FieldLabel htmlFor="otp">OTP</FieldLabel>
                                </div>
                                <Input
                                    type="text"
                                    placeholder="Optional OTP Token"
                                    name="otp"
                                    id="otp"
                                    value={formData.otp}
                                    onChange={handleInputChange}
                                />
                            </Field>
                            <Field>
                                <Button type="submit">Login</Button>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}