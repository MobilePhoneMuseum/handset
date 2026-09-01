import {type CodegenConfig} from '@graphql-codegen/cli'

const config: CodegenConfig = {
    overwrite: true,
    schema: [
        {
            'https://cms.mobilephonemuseum.com/graphql': {
                headers: {
                    Authorization: `Bearer ${process.env.DEV_MPM_DIRECTUS_TOKEN}`,
                },
            },
        },
    ],
    documents: ['app/**/*.{ts,tsx}'],
    ignoreNoDocuments: true,

    generates: {
        './types/gql/': {
            preset: "client",
            plugins: ['typescript', 'typescript-resolvers'],
            presetConfig: {
                fragmentMasking: false,
                gqlTagName: 'gql',
            },
            hooks: {afterOneFileWrite: ['tslint --fix']},
            config: {
                useTypeImports: true,
                // Apollo Client always includes `__typename` fields
                nonOptionalTypename: true,
                // Apollo Client doesn't add the `__typename` field to root types so
                // don't generate a type for the `__typename` for root operation types.
                skipTypeNameForRoot: true,
            },
        },
    },
}

export default config
