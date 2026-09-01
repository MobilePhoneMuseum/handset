import {HttpLink} from "@apollo/client";
import {ApolloClient, InMemoryCache, registerApolloClient,} from "@apollo/client-integration-nextjs";
import {getServerSession} from "next-auth/next";
import {options} from "@/lib/auth/options";

export const {getClient, query, PreloadQuery} = registerApolloClient(async () => {
    const session = await getServerSession(options);

    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: `${process.env.NEXT_PUBLIC_DIRECTUS_API}/graphql`,
            headers: {
                ...(session?.access_token
                    ? {
                        Authorization: `Bearer ${session.access_token}`,
                    }
                    : {}),
            },
        }),
    });
});