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
    documents: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
    ignoreNoDocuments: true,

    generates: {
        // Operation types and typed documents. The client preset runs typescript-operations, which
        // also emits the input types it needs, so the `typescript` plugin must not be added here.
        './types/gql/': {
            preset: "client",
            plugins: [],
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
        // Schema types (Product, Donor, Model, ...) and resolvers, kept apart to avoid duplicate declarations.
        './types/gql/schema.ts': {
            plugins: ['typescript', 'typescript-resolvers'],
            hooks: {afterOneFileWrite: ['tslint --fix']},
            config: {
                useTypeImports: true,
            },
        },
    },
}

export default config
