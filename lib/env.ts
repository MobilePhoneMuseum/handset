const env = {
    siteName: process.env.NEXT_PUBLIC_SITE_NAME ?? "",
    siteDescription: process.env.NEXT_PUBLIC_SITE_DESCRIPTION ?? "",
    appEnv: process.env.NEXT_PUBLIC_ENVIRONMENT ?? "development",
    isProduction: process.env.NEXT_PUBLIC_ENVIRONMENT === "production",
}

export default env