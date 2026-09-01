import {authentication, createDirectus, graphql, rest, staticToken,} from "@directus/sdk"

export const directus = (token: string = "") => {
    if (token) {
        return createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_API ?? "")
            .with(staticToken(token))
            .with(rest())
            .with(graphql())
    }
    return createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_API ?? "")
        .with(
            authentication("cookie", {credentials: "include", autoRefresh: true})
        )
        .with(rest())
        .with(graphql())
}

export const login = async ({
                                email,
                                password,
                                otp,
                            }: {
    email: string
    password: string,
    otp?: string
}) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_DIRECTUS_API}/auth/login`,
        {
            method: "POST",
            body: JSON.stringify({email, password, otp}),
            headers: {"Content-Type": "application/json"},
        }
    )
    const user = await res.json()
    if (!res.ok && user) {
        if (user.errors.length > 0) {
            throw new Error(user.errors[0].message)
        }
        throw new Error("Email address or password is invalid")
    }
    if (res.ok && user) {
        return user?.data
    }
}