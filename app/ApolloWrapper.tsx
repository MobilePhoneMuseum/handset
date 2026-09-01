"use client";

import {getSession} from "next-auth/react";
import {ApolloClient, ApolloNextAppProvider, InMemoryCache,} from "@apollo/client-integration-nextjs";
import {HttpLink} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

function makeClient() {
    const httpLink = new HttpLink({
        uri: `${process.env.NEXT_PUBLIC_DIRECTUS_API}/graphql`
    });

    const authLink = setContext(async (_, {headers = {}}) => {
        const session = await getSession();

        return {
            headers: {
                ...headers,
                ...(session?.access_token
                    ? {
                        Authorization: `Bearer ${session?.access_token}`,
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