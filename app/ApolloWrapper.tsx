"use client";

import {ApolloClient, ApolloNextAppProvider, InMemoryCache} from "@apollo/client-integration-nextjs";
import {HttpLink} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {authClient} from "@/lib/auth/auth-client";

function makeClient() {
    const httpLink = new HttpLink({
        uri: `${process.env.NEXT_PUBLIC_DIRECTUS_API}/graphql`
    });

    const authLink = setContext(async (_, {headers = {}}) => {
        const session = await authClient.getSession();
        const accessToken = (session?.data?.user as any)?.accessToken;

        return {
            headers: {
                ...headers,
                ...(accessToken
                    ? {
                        Authorization: `Bearer ${accessToken}`,
                    }
                    : {}),
            },
        };
    });

    return new ApolloClient({
        cache: new InMemoryCache(),
        link: authLink.concat(httpLink),
    });
}

export function ApolloWrapper({
                                  children,
                              }: {
    children: React.ReactNode;
}) {
    return (
        <ApolloNextAppProvider
            makeClient={() => makeClient()}
        >
            {children}
        </ApolloNextAppProvider>
    );
}
