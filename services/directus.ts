import {authentication, createDirectus, graphql, rest, staticToken, uploadFiles,} from "@directus/sdk"

export interface DirectusUploadedFile {
    id: string;
    title?: string | null;
    filename_download?: string | null;
    type?: string | null;
    filesize?: number | null;

    [key: string]: unknown;
}

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

export const uploadDirectusFile = async (
    token: string,
    file: Blob | File,
    filename: string = "product-photo.jpg"
): Promise<DirectusUploadedFile> => {
    if (!token) {
        throw new Error("Authentication token is required to upload files to Directus")
    }
    const client = directus(token)
    const formData = new FormData()
    formData.append("file", file, filename)
    try {
        const result = await client.request(uploadFiles(formData))
        return result as DirectusUploadedFile
    } catch (err: unknown) {
        if (err instanceof Error) {
            throw err
        }
        throw new Error("Failed to upload file to Directus")
    }
}