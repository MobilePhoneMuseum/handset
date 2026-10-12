const env = {
    siteName: process.env.NEXT_PUBLIC_SITE_NAME ?? "",
    siteDescription: process.env.NEXT_PUBLIC_SITE_DESCRIPTION ?? "",
    appEnv: process.env.NEXTJS_ENV ?? "development",
    isProduction: process.env.NEXTJS_ENV === "production",
}

export default env