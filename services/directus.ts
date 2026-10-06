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
            // Directus rejects an empty "otp", so only send it when one was entered.
            body: JSON.stringify({email, password, ...(otp ? {otp} : {})}),
            headers: {"Content-Type": "application/json"},
            cache: "no-store",
        }
    )
    const body = await res.json().catch(() => null)
    if (!res.ok) {
        const firstError = body?.errors?.[0]
        const error = new Error(firstError?.message || "Email address or password is invalid")
        if (firstError?.extensions?.code) {
            (error as unknown as { code?: string }).code = firstError.extensions.code
        }
        throw error
    }
    if (!body?.data?.access_token) {
        throw new Error("Authentication failed")
    }
    return body.data as { access_token: string; refresh_token?: string; expires?: number }
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