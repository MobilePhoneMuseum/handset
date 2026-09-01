"use client";

import {useSession} from "next-auth/react";
import {ApolloClient, ApolloNextAppProvider, InMemoryCache,} from "@apollo/client-integration-nextjs";
import {ApolloLink, HttpLink} from "@apollo/client";

function makeClient() {
    const httpLink = new HttpLink({
        uri: `${process.env.NEXT_PUBLIC_DIRECTUS_API}/graphql`
    });

    const authLink = new ApolloLink((operation, forward) => {
        const {data: session} = useSession();

        operation.setContext(({headers = {}}) => ({
            headers: {
                ...headers,
                ...(session?.access_token
                    ? {
                        Authorization: `Bearer ${session?.access_token}`,
                    }
                    : {}),
            },
        }));

        return forward(operation);
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