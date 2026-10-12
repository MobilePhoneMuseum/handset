const env = {
    siteName: process.env.NEXT_PUBLIC_SITE_NAME ?? "",
    siteDescription: process.env.NEXT_PUBLIC_SITE_DESCRIPTION ?? "",
    appEnv: process.env.NEXT_PUBLIC_APP_ENV ?? "local",
    isProduction: process.env.NEXT_PUBLIC_APP_ENV === "production",
}

export default env