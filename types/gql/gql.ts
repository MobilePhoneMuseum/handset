/* eslint-disable */
import * as types from './graphql';
import type {TypedDocumentNode as DocumentNode} from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n    query QueryProducts(\n        $limit: Int\n        $page: Int\n        $search: String\n        $filter: product_filter\n        $sort: [String]\n    ) {\n        product(\n            limit: $limit\n            page: $page\n            search: $search\n            filter: $filter\n            sort: $sort\n        ) {\n            id\n            status\n            imei\n            description\n            model_id {\n                id\n                name\n                display_name\n                brand_id {\n                    id\n                    name\n                }\n                slug\n            }\n        }\n        product_aggregated(search: $search, filter: $filter) {\n            count {\n                id\n            }\n        }\n    }\n": typeof types.QueryProductsDocument,
};
const documents: Documents = {
    "\n    query QueryProducts(\n        $limit: Int\n        $page: Int\n        $search: String\n        $filter: product_filter\n        $sort: [String]\n    ) {\n        product(\n            limit: $limit\n            page: $page\n            search: $search\n            filter: $filter\n            sort: $sort\n        ) {\n            id\n            status\n            imei\n            description\n            model_id {\n                id\n                name\n                display_name\n                brand_id {\n                    id\n                    name\n                }\n                slug\n            }\n        }\n        product_aggregated(search: $search, filter: $filter) {\n            count {\n                id\n            }\n        }\n    }\n": types.QueryProductsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query QueryProducts(\n        $limit: Int\n        $page: Int\n        $search: String\n        $filter: product_filter\n        $sort: [String]\n    ) {\n        product(\n            limit: $limit\n            page: $page\n            search: $search\n            filter: $filter\n            sort: $sort\n        ) {\n            id\n            status\n            imei\n            description\n            model_id {\n                id\n                name\n                display_name\n                brand_id {\n                    id\n                    name\n                }\n                slug\n            }\n        }\n        product_aggregated(search: $search, filter: $filter) {\n            count {\n                id\n            }\n        }\n    }\n"): (typeof documents)["\n    query QueryProducts(\n        $limit: Int\n        $page: Int\n        $search: String\n        $filter: product_filter\n        $sort: [String]\n    ) {\n        product(\n            limit: $limit\n            page: $page\n            search: $search\n            filter: $filter\n            sort: $sort\n        ) {\n            id\n            status\n            imei\n            description\n            model_id {\n                id\n                name\n                display_name\n                brand_id {\n                    id\n                    name\n                }\n                slug\n            }\n        }\n        product_aggregated(search: $search, filter: $filter) {\n            count {\n                id\n            }\n        }\n    }\n"];

export function gql(source: string) {
    return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;