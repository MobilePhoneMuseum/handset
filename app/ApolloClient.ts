import {HttpLink} from "@apollo/client";
import {ApolloClient, InMemoryCache, registerApolloClient} from "@apollo/client-integration-nextjs";
import {getSession} from "@/lib/auth/session";

export const {getClient, query, PreloadQuery} = registerApolloClient(async () => {
    const session = await getSession();

    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: `${process.env.NEXT_PUBLIC_DIRECTUS_API}/graphql`,
            headers: {
                ...(session?.user?.accessToken
                    ? {
                        Authorization: `Bearer ${session.user.accessToken}`,
                    }
                    : {}),
            },
        }),
    });
});
