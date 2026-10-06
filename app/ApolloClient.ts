import {HttpLink} from "@apollo/client";
import {ApolloClient, InMemoryCache, registerApolloClient} from "@apollo/client-integration-nextjs";
import {getAccessToken} from "@/lib/auth/session";

export const {getClient, query, PreloadQuery} = registerApolloClient(async () => {
    const accessToken = await getAccessToken();

    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: `${process.env.NEXT_PUBLIC_DIRECTUS_API}/graphql`,
            headers: {
                ...(accessToken
                    ? {
                        Authorization: `Bearer ${accessToken}`,
                    }
                    : {}),
            },
        }),
    });
});
